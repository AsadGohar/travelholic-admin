const mongoose = require ('mongoose');

const ReviewSchema = mongoose.Schema({
    user:{type:mongoose.Schema.ObjectId, ref:'User'},
    text:{type:String,required:true},
    reported:{type:Boolean,default:true},
},{ timestamps: true});

const ReviewModel = mongoose.model('Review', ReviewSchema);
module.exports = ReviewModel;
