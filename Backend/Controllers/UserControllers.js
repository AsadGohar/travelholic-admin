const UserModel = require('../Models/User');
const HttpError = require('../Models/HttpError');
const multer = require('multer')
const fs = require("fs")
const Joi = require('joi');

//IMAGE HANDLING
const multerStorage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'public/images/users')
  },
  filename:(req,file,cb)=>{
    const ext = file.mimetype.split('/')[1];
    cb(null,`user-${req.body.id}-${Date.now()}.${ext}`)
  }
})

const multerFilter = (req,file,cb)=>{
  if(file.mimetype.startsWith('image')){
    cb(null,true)
  }
  else{
    cb('error')
  }
}
const upload = multer({
  storage:multerStorage,
  fileFilter:multerFilter
})

exports.uploadUserPhoto = upload.single('photo')


//CREATE A USER
const createUser = async(req,res,next)=>{
  const {name,password,email,mobile_num} = req.body
  console.log(name,password,email,mobile_num)
  let {error} = validation(req.body)
  if(error){
    const err = new HttpError(error.details[0].message,500);
    return next(err);
  }
  let token;

  let user = await UserModel.findOne({email:email})
  if(user){
    const error = new HttpError('User Already Registered',500);
    return next(error);
  }
  else {
    try {
      user = UserModel()
      user.name=name
      user.email=email
      user.password=password
      user.mobile_num=mobile_num
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
  if (!user) {
    const error = new HttpError('You Are Not Registered',500);
    return next(error);
  }
  try {
    isMatch = await user.comparePassword(password)
  } catch (error) {
    console.log(error)
  }
  console.log(isMatch)
  if (!isMatch) {
    const error = new HttpError('Incorrect Password or Username',500);
    return next(error);
  }
  
  token = user.getToken()
  res.send(token)
}

//GETTING USER BY ID
const getUserById = async (req,res,next) => {
  let id = req.params.id
  let user = await UserModel.findById(id).select('+password')
  res.send(user)
}

//UPDATE USER BY ID
const updateUserById = async(req,res,next) =>{

  const id = req.params.id
  console.log(id)
  const{name,mobile_num,gender} = req.body
  let user 
  try {
    user = await UserModel.findByIdAndUpdate(id,{name,gender,mobile_num})
  } catch (err) {
    const error = new HttpError('Finding User Failed',500);
    return next(error);
  }
  if(!user){
    const error = new HttpError('No Such Existing User',500);
    return next(error);
  }
  res.send(user)
}


//UPDATING USER'S PASSWORD
const updatePassword = async (req,res,next) =>{

  let id=req.params.id
  const {currentPassword,newPassword,newPasswordConfirm} = req.body
  let user ,isMatch
  try {
    user= await UserModel.findById(id).select('+password')
  } catch (err) {
    const error = new HttpError('Finding User Failed',500);
    return next(error);
  }
  if(!user){
    const error = new HttpError('No Such Registered User',500);
    return next(error);
  }
  try {
    isMatch = await user.comparePassword(currentPassword)
  } catch (err) {
    const error = new HttpError('Matching Password Failed',500);
    return next(error);
  }
  console.log(isMatch)
  if(!isMatch){
    const error = new HttpError('Current Password is Incorrect',500);
    return next(error);
  }
  if(newPassword=== newPasswordConfirm){
    user.password = newPassword
    user.save()
  }
   res.send(user)
}

//DELETE USER BY ID
const deleteUserById = async(req,res,next) =>{

  let id = req.params.id
  console.log(id)
  let user 
  try {
    user = await UserModel.findByIdAndDelete(id)
  } catch (err) {
    const error = new HttpError('Finding User Failed',500);
    return next(error);
  }
  if(!user){
    const error = new HttpError('No Such Existing User',500);
    return next(error);
  }
  res.send('User Deleted')
}

//UPLOAD USER PROFILE PIC
const uploadProfilePic = async (req,res,next) =>{

  const{id}= req.body
  let user,name,tempPath
  name =req.file.filename
  console.log(name)
  try {
    user = await UserModel.findById(id).select('+password')
    tempPath = 'public\\images\\users\\'+ user.display_image_name
    console.log('tempapth',tempPath)
    user.display_image_name=req.file.filename
    user.save()
  } catch (err) {
    const error = new HttpError('Updating User Failed',500);
    return next(error);
  }
  if(!user){
    const error = new HttpError('No Such User Found',500);
    return next(error);
  }
  
  if(tempPath!=='public\\images\\users\\default.jpg'){
    fs.unlink(tempPath, function(err) {
      if (err) {
        console.log(err)
      } else {
        console.log("Successfully deleted the previous")
      }
    })
  }
  res.send(user)
}

const getAllUsersAdmin = async (req,res,next)=>{
  var users
  try {
    users = await UserModel.find()
 } 
 catch (err) {
   const error = new HttpError('finding Questions failed, please try again',500);
   return next(error);
 }

 if (!users) {
   const error = new HttpError('could not find Questions',404);
   return next(error);
 }
 res.send(users)
}

const validation = (values) =>{
  let joiSchema = Joi.object().keys({
    'name' : Joi.string().required(),
    'mobile_num' : Joi.number().required(),
    'email': Joi.string().email({ minDomainSegments: 2}).required().lowercase(),
    'password' : Joi.string().required().pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
  })

  return joiSchema.validate(values)
}

module.exports.createUser =createUser
module.exports.logIn =logIn
module.exports.getUserById =getUserById
module.exports.updatePassword =updatePassword
module.exports.updateUserById =updateUserById
module.exports.deleteUserById =deleteUserById
module.exports.uploadProfilePic  =uploadProfilePic 
module.exports.getAllUsersAdmin  =getAllUsersAdmin 

