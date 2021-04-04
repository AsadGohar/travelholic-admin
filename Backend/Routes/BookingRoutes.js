const express = require('express');
const BookingControllers = require('../Controllers/BookingControllers');
const { check } = require('express-validator');
const router = express.Router();


// Create a Booking
router.post('/', 
[
    check('name').not().isEmpty(), 
    check('address').not().isEmpty()
],
BookingControllers.createBooking);

// get a Booking by ID
router.get('/:id', BookingControllers.getBookingById);

//Get all Bookings
router.get('/', BookingControllers.getBookings);

//Delete a Booking
router.delete('/:id', BookingControllers.deleteBooking);

module.exports = router;