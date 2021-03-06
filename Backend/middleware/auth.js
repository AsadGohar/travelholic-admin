const jwt = require('jsonwebtoken')
const UserModel = require('../Models/User');
const HttpError = require('../Models/HttpError');

const auth = async (req,res,next) =>{

  let token

  if(req.headers.authorization)
  token =req.headers.authorization;
  if(!token){
    const error = new HttpError(
      'Not Authorized',
      500
      );
      return next(error);
  }
  try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    req.user= await UserModel.findById(decoded.id)
    next()
  } catch (err) {
    const error = new HttpError(
      'Not Authorized',
      500
      );
      return next(error);
  }
}

module.exports.auth= auth
