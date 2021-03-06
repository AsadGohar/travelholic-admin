const mongoose = require ('mongoose');
const bcrypt = require ('bcryptjs')
const uniqueValidator = require('mongoose-unique-validator');
const jwt = require('jsonwebtoken')

const UserSchema = mongoose.Schema({
    name: { type: String , required:true},
    email: {type:String , required:[true,'Unique Email Required'] ,lowercase: true,unique: true},
    mobile_num: { type: String },
    street_address: {type: String},
    password: { type: String , required:true,select:false},
    dob : {type:Date},
    gender: { type: String },
    city: {type: String},
    reported: {type:Boolean,default:false},
    display_image_url:{type:String},
},{timestamps: true});

UserSchema.plugin(uniqueValidator)

UserSchema.pre('save', async function (next){
    try{
        const salt =  await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(this.password, salt)
        this.password = hashedpassword
        next()
    } catch (error){
        next(error)
    }
})

UserSchema.methods.getToken = function (){
 return jwt.sign({id:this._id},process.env.JWT_SECRET,{
     expiresIn:process.env.JWT_EXPIRE
 });
}

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;

