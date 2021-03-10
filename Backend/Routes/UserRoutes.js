const express = require ('express');
const router = express.Router();

const UserController = require('../Controllers/UserControllers')

router.post('/', UserController.createUser)
router.put('/password/:id', UserController.updatePassword)
router.put('/upload', UserController.uploadUserPhoto,UserController.uploadProfilePic)
router.put('/:id', UserController.updateUserById)
router.get('/:id', UserController.getUserById)
router.delete('/:id', UserController.deleteUserById)
router.post('/login', UserController.logIn)

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
