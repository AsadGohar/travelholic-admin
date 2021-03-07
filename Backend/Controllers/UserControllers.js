const UserModel = require('../Models/User');
const HttpError = require('../Models/HttpError');

//CREATE A USER
const createUser = async(req,res,next)=>{
  const {name,password,email,number} = req.body
  let token;

   let user = await UserModel.findOne({email:email})
   if(user){
    const error = new HttpError('User Already Registered',500);
    return next(error);
   }
   else{
    try{
      user = UserModel()
      user.name=name
      user.email=email
      user.password=password
      user.mobile_number=number
      token = user.getToken()
      await user.save()
    }
    catch(err) {
      const error = new HttpError('Creating User Failed',500);
      return next(error);
    }
    res.send({user,token})
   }
}

//USER SIGN IN
const logIn = async(req,res,next)=>{
  const {email,password} = req.body
  let token;
  let isMatch
 

   let user = await UserModel.findOne({email:email}).select('+password')
   if(!user){
    const error = new HttpError('You Are Not Registered',500);
    return next(error);
   }
   try {
     
   isMatch = await user.comparePassword(password)
   } catch (error) {
     console.log(error)
   }
   console.log(isMatch)
   if(!isMatch){
     const error = new HttpError('Incorrect Password or Username',500);
     return next(error);
   }
   
   token = user.getToken()
   res.send(token)
}

const getUserById = async (req,res,next) => {
  let id = req.params.id
  let user = await UserModel.findById(id)
  res.send(user)
}

module.exports.createUser =createUser
module.exports.logIn =logIn
module.exports.getUserById =getUserById

