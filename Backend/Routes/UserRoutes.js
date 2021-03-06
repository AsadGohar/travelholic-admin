const express = require ('express');
const router = express.Router();

const UserController = require('../Controllers/UserControllers')

router.post('/', UserController.createUser)

module.exports = router;
// const UserModel = require('../Models/UserModel');
// const express = require ('express');

// const router = express.Router();

//userController 

// router.get('/' ,async (req,res)=>{
//   const users = await UserModel.find()
//   res.send(users)
// })

// router.post('/add', async (req,res)=>{
//   const {name, mobile_num, email, password, cnic,city, role,address} = req.body
//   let user = new UserModel()
  
//     user.name = name
//     user.mobilenum = mobilenum
//     user.email = email
//     user.password = password
//     user.address = address
    
//     await user.save();

//     await user.save();
// })
