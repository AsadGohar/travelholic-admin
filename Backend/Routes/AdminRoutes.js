const AdminControllers = require('../Controllers/AdminControllers')
const express = require('express');
const { protectAdmin } = require('../middleware/auth')

const router = express.Router();


// Create super Admin
router.post('/superadmin', AdminControllers.createSuperAdmin)

// Create Admin
router.post('/', protectAdmin, AdminControllers.createAdmin)

// Login Admin
router.post('/login', AdminControllers.adminLogin)

// Delete an Admins
router.delete('/:id', protectAdmin, AdminControllers.deleteAdmin)


module.exports = router;