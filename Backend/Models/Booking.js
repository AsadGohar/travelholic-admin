const mongoose = require ('mongoose');

const BookingSchema = mongoose.Schema({
   name: {type:String, required: true },
   // user:{type: mongoose.Schema.ObjectId, ref : 'User', required:true},
   city: {type: String, required: true },
   address: {type: String, required: true },
   seats:{type: Number, required:true},
   booking_confirmed:{type:Boolean,default:false}
},{ timestamps: true});

const BookingModel = mongoose.model('Booking', BookingSchema);
module.exports = BookingModel;
