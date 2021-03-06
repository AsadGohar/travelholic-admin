const UserModel = require('../Models/User');
const HttpError = require('../Models/HttpError');

const createUser = async(req,res,next)=>{
  const {name,password,email,number} = req.body
  let token;

   let user = await UserModel.findOne({email:email})
   if(user){
    const error = new HttpError(
      'User Already Registered',
      500
      );
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
      const error = new HttpError(
        'Creating User Failed',
        500
        );
        return next(error);
    }
    res.send({user,token})
   }
  //  else{
    
    
  //   try {
      
  //   } catch (err) {
      
  //   }
  //  }

}

module.exports.createUser =createUser
