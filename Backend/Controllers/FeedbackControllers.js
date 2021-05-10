const FeedbackModel = require('../Models/Feedback')
const HttpError = require('../Models/HttpError');

//CREATE FEEDBACK
const createFeedback = async (req,res,next)=>{
  const {name,email,message,phone}= req.body
  let feedback
  try {
    feedback= FeedbackModel()
    feedback.name=name
    feedback.email=email
    feedback.message=message
    feedback.phone=phone
    await feedback.save()
  } catch (err) {
    const error = new HttpError('Creating Feedback failed',500);
    return next(error);
  }
  res.send(feedback)
}
//GET ALL FEEDBACK
const getFeedback = async (req,res,next)=>{
  
  let feedback
  try {
    feedback= await FeedbackModel.find()
  } catch (err) {
    const error = new HttpError('Finding Feedback failed',500);
    return next(error);
  }
  if (feedback.length===0){
    const error = new HttpError('No Feedback Found',500);
    return next(error);
  }
  res.send(feedback)
}
module.exports.createFeedback  =  createFeedback
module.exports.getFeedback  =  getFeedback
