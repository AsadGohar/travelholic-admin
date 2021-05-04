const asyncHandler = require('express-async-handler')
const Admin = require('../Models/Admin')
const HttpError = require('../Models/HttpError');
const jwt = require('jsonwebtoken');


// Create Admin
const createSuperAdmin = asyncHandler(async (req, res, next) => {
    const { name, username, password } = req.body

    let token;

    let admin = await Admin.findOne({ isSuperAdmin: true })
    if (admin) {
        const error = new HttpError('Super Admin already registered. There can be only one superAdmin', 500);
        return next(error);
    } else {
        try {
            admin = Admin()
            admin.name = name
            admin.username = username
            admin.password = password
            admin.isSuperAdmin = true
            token = admin.getToken()
            await admin.save()
        }
        catch (err) {
            const error = new HttpError('Creating Admin Failed', 500);
            return next(error);
        }

        res.json({
            _id: admin._id,
            name: admin.name,
            username: admin.username,
            isSuperAdmin: admin.isSuperAdmin,
            token: token
        })
    }
})



// Admin Login
const adminLogin = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body

    const admin = await Admin.findOne({ username })

    const token = await admin.getToken()

    if (admin && (await admin.matchPassword(password))) {
        res.cookie('token', token, { httpOnly: true, maxAge: 3600000 })
        res.cookie('isSuperAdmin', admin.isSuperAdmin, { httpOnly: true, maxAge: 3600000 })
        res.json({
            // _id: admin._id,
            name: admin.name,
            // username: admin.username,
            // isSuperAdmin: admin.isSuperAdmin,
            // token: token
        })
    } else {
        res.status(401)
        throw new Error('Invalid username or password')
    }
})


//   Create secondary Admins
const createAdmin = asyncHandler(async (req, res, next) => {
    const { name, username, password } = req.body

    let token;

    let admin = await Admin.findOne({ username: username })
    if (admin) {
        const error = new HttpError('An admin is already registered on this username, try another username', 500);
        return next(error);
        // } else if (!req.admin.isSuperAdmin) {
        //     const error = new HttpError('Only a super admin can create new admins', 500);
        // console.log(error)
        //     return next(error);
    } else {
        try {
            admin = Admin()
            admin.name = name
            admin.username = username
            admin.password = password
            token = admin.getToken()
            await admin.save()
        }
        catch (err) {
            const error = new HttpError('Creating Admin Failed', 500);
            return next(error);
        }

        res.json({
            _id: admin._id,
            name: admin.name,
            username: admin.username,
            isSuperAdmin: admin.isSuperAdmin,
            token: token
        })
    }
})


// Delete admin
const deleteAdmin = asyncHandler(async (req, res, next) => {
    const admin = await Admin.findById(req.params.id)

    if (admin) {
        await admin.remove()
        res.json({ message: 'Admin removed' })
    } else {
        res.status(404)
        throw new Error('Admin not found')
    }
})


// Logout admin
const logoutAdmin = async (req, res) => {
    const options = {
        expires: new Date(0),
        httpOnly: true,
    };
    res.cookie("token", "expiredtoken", options);
    res.status(200).json({ status: "success logging out" });
};


//   Check if admin is logged in
const isLoggedIn = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.json(false);

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        res.send(decoded)

    } catch (err) {
        res.send({message: 'An Error Occured'})
    }
}



module.exports.createSuperAdmin = createSuperAdmin
module.exports.createAdmin = createAdmin
module.exports.adminLogin = adminLogin
module.exports.deleteAdmin = deleteAdmin
module.exports.logoutAdmin = logoutAdmin
module.exports.isLoggedIn = isLoggedIn

