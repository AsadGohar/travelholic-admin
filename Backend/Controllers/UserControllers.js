const UserModel = require('../Models/User');

const createUser = async(name,password,email)=>{
  console.log("in user")
  let user = UserModel()
  user.name=name
  user.email=password
  user.password=email
  await user.save()
  return user
}

module.exports.createUser =createUser
