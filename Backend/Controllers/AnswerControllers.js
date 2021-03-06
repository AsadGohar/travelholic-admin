const AnswerModel = require('../Models/Answer');
const HttpError = require('../Models/HttpError');

//ADDING NEW ANSWER
const createAnswer = async(req,res,next)=>{

  const {user,text,reported,question} = req.body
  let answer = AnswerModel()
  answer.user=user
  answer.text=text
  answer.question=question
  answer.reported=reported
  
  try {
    await answer.save()
  } 
  catch (err) {
    const error = new HttpError(
    'creating Answer failed',
    500
    );
    return next(error);
  }
  res.send(answer)
}

//GETTING ALL ANSWERS
const getAnswers = async (req,res,next) => {
  let answers
  try {
    answers = await AnswerModel.find()
  } 
  catch (err) {
    const error = new HttpError(
    'getting Answers failed, please try again',
    500
    );
    return next(error);
  }
  if (!answers) {
    const error = new HttpError(
    'could not find Answers',
    404
    );
    return next(error);
  }
  res.send(answers)
}

//DELETE ANSWER BY ID
const deleteAnswerbyId =  async (req,res,next) => {
  let id = req.params.id
  let answer 
  try {
    answer = await AnswerModel.findByIdAndDelete(id)
  } 
  catch (err) {
    const error = new HttpError(
    'deleting Answer failed, please try again',
    500
    );
    return next(error);
  }
  if (!answer) {
    const error = new HttpError(
    'could not find an Answer for the provided id.',
    404
    );
    return next(error);
  }
  res.send(answer)
}

//GET ANSWERS ADMIN
const getAnswersAdmin = async (req,res,next) => {
  AnswerModel.find().populate('user', 'name -_id').exec(function(err,data){
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

//GET ALL REPORTED ANSWERS
const getAllReportedAnswers = async(req,res,next)=> {

  let reportedAnswers
  try {
    reportedAnswers =  await AnswerModel.find({reported:true})
  } 
  catch (err) {
    const error = new HttpError(
    'finding Answers failed, please try again',
    500
    );
    return next(error) 
  }
  if (!reportedAnswers) {
    const error = new HttpError(
      'Could not find any reported answers',
      404
    );
    return next(error);
  }
  res.send(reportedAnswers)
}

//UPDATING ANSWER BY ID
const updateAnswerbyId = async(req,res,next)=>{
  let id = req.params.id;
  const {text} = req.body
  let answer
  try {
    answer = await AnswerModel.findOneAndUpdate(id,{text:text})
  } 
  catch (err) {
    const error = new HttpError(
    'deleting Answer failed, please try again',
    500
    );
    return next(error) 
  }
  if (!answer) {
    const error = new HttpError(
    'could not find an Answer for the provided id.',
    404
    );
    return next(error);
  }
  res.send(answer)
}


//EXPORTING CONTROLLERS
module.exports.createAnswer  = createAnswer;
module.exports.getAnswers  = getAnswers;
module.exports.getAnswersAdmin  = getAnswersAdmin;
module.exports.deleteAnswerbyId  = deleteAnswerbyId;
module.exports.getAllReportedAnswers  = getAllReportedAnswers;
module.exports.updateAnswerbyId  = updateAnswerbyId;
