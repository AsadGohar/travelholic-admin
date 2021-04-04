const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
   // user: {
   //    type: mongoose.Schema.Types.ObjectId,
   //    required: true,
   //    ref: 'User'
   // },
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   city: {
      type: String,
      required: true
   },
   address: {
      type: String,
      required: true
   },
   phoneNo: {
      type: Number,
      required: true
   },
   seats: {
      type: Number,
      required: true
   },
   paymentMethod: {
      type: String,
      required: true
   },
   isPaid: {
      type: Boolean,
      required: true,
      default: false
   },
   paidAt: {
      type: Date,
   }
}, { timestamps: true });

const BookingModel = mongoose.model('Booking', BookingSchema);
module.exports = BookingModel;
