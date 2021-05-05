const express = require ('express');
const router = express.Router();

const UserController = require('../Controllers/UserControllers')

router.post('/', UserController.createUser)
router.put('/password/:id', UserController.updatePassword)
router.put('/upload', UserController.uploadUserPhoto,UserController.uploadProfilePic)
router.put('/:id', UserController.updateUserById)
router.get('/:id', UserController.getUserById)
router.get('/admin/users', UserController.getAllUsersAdmin)
router.delete('/:id', UserController.deleteUserById)
router.post('/login', UserController.logIn)

module.exports = router;
