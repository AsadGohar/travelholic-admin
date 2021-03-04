const QuestionModel = require('../Models/Question');
const HttpError = require('../Models/HttpError');

//ADD NEW QUESTION
const createQuestion = async (req,res,next)=> {

  const {user,statement,description,reported}=req.body
  let question = QuestionModel()
  question.user=user
  question.statement =statement
  question.description=description
  question.reported=reported

  try {
    await question.save()
  } catch (err) {
    const error = new HttpError(
    'creating Question failed, please try again',
    500
  );
  return next(error);
  }
  res.status(201).send({ question: question });
}

//GET ALL QUESTIONS
const getQuestions = async(req,res,next)=>{

  let questions 
  try {
     questions = await QuestionModel.find()
  } 
  catch (err) {
    const error = new HttpError(
    'finding Questions failed, please try again',
    500
  );
    return next(error);
  }

  if (!questions) {
    const error = new HttpError(
      'could not find Questions',
      404
    );
    return next(error);
  }
  
  res.send(questions)
}
//GET ANSWERS ADMIN
const getQuestionsAdmin = async (req,res,next) => {
  QuestionModel.find().populate('user', 'name -_id').exec(function(err,data){
  if(err){
    const error = new HttpError(
      'getting Answers failed, please try again',
      500
      );
      return next(error);
  }
  else{
    res.send(data)
  }
  })
}

//UPDATE A QUESTION BY ID
const updateQuestionbyId = async(req,res,next)=>{

  let question
  const {id}=req.params.id
  const {statement}=req.body
  try {
    question = await QuestionModel.findByIdAndUpdate(id,{statement:statement})
  } 
  catch (err) {
    const error = new HttpError(
    'Unknown error occured while updating question, please try again.',
    500
  );
    return next(error);
  }
  if (!question) {
    const error = new HttpError(
      'could not find a Question for the provided id.',
      404
    );
      return next(error);
  }
  res.send(question)
}

//DELETING QUESTION BY ID
const deleteQuestionbyId = async(req,res,next)=>{

  let question
  let id =req.params.id
  try {
    question = await QuestionModel.findByIdAndDelete(id)
  } 
  catch (err) {
    const error = new HttpError(
    'unknown error occured while deleting Question, please try again',
    500
    );
    return next(error)
  }
  if (!question) {
    const error = new HttpError(
    'could not find a Question for the provided id.',
    404
    );
      return next(error);
  }
  res.send(question)
}

//EXPORTING CONTROLLERS
module.exports.updateQuestionbyId  = updateQuestionbyId
module.exports.createQuestion  = createQuestion
module.exports.getQuestions  = getQuestions
module.exports.getQuestionsAdmin  = getQuestionsAdmin
module.exports.deleteQuestionbyId=deleteQuestionbyId
