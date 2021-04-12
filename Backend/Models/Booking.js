const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
   // user: {
   //    type: mongoose.Schema.Types.ObjectId,
   //    required: true,
   //    ref: 'User'
   // },
   title: {
      type: String,
      required: true
   },
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
      type: String,
      required: true
   },
   seats: {
      type: Number,
      required: true
   },
   paymentMethod: {
      type: String,
   },
   totalPrice: {
      type: Number,
      required: true
   },
   isPaid: {
      type: Boolean,
      default: false
   },
   paidAt: {
      type: Date,
   },
   booking_confirmed: {
      type: Boolean,
      default: false
   },
}, { timestamps: true });

const BookingModel = mongoose.model('Booking', BookingSchema);
module.exports = BookingModel;
