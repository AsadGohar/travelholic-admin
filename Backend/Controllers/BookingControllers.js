const Booking = require('../Models/Booking');
const { validationResult } = require('express-validator');
const HttpError = require('../Models/HttpError');

// CREATE A NEW BOOKING
const createBooking = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
            new HttpError('Invalid input. Check your data', 422)
        );
    }

    const { title, name, email, city, address, phoneNo, seats, paymentMethod, totalPrice, isPaid, paidAt, booking_confirmed } = req.body;

    const createdBooking = new Booking({
        title,
        name,
        email,
        city,
        address,
        phoneNo,
        seats,
        paymentMethod: 'Unpaid',
        totalPrice,
        isPaid,
        paidAt,
        booking_confirmed
    });

    try {
        await createdBooking.save();
    } catch (err) {
        const error = new HttpError('Creating booking failed, please try again.', 500);
        return next(error);
    }
    res.status(201).send(createdBooking);
}

// GET ALL BOOKINGS
const getBookings = async (req, res, next) => {
    let bookings;
    try {
        bookings = await Booking.find();
    } catch (err) {
        const error = new HttpError('Unknown error occured while getting bookings, please try again.', 500);
        return next(error);
    }
    res.send(bookings);
}


// GET A BOOKING BY ID
const getBookingById = async (req, res, next) => {
    const bookingId = req.params.id
    let booking
    try {
        booking = await Booking.findById(bookingId);
    } catch (err) {
        const error = new HttpError('Unknown error occured while getting booking, please try again.', 500);
        return next(error);
    }

    if (!booking) {
        const error = new HttpError('Could not find a booking for the provided id.', 404);
        return next(error);
    }

    res.json(booking);
}

// DELETE BOOKING
const deleteBooking = async (req, res, next) => {
    const bookingId = req.params.id;
    let booking;
    try {
        booking = await Booking.findById(bookingId);
    } catch (err) {
        const error = new HttpError('Unknown error occured while deleting booking, please try again.', 500);
        return next(error);
    }

    try {
        await booking.remove();
    } catch (err) {
        const error = new HttpError('Unknown error occured while deleting booking, please try again.', 500);
        return next(error);
    }

    res.status(200).json({ message: 'booking has been deleted' });
}


// EXPORTING ALL CONTROllERS HERE
exports.createBooking = createBooking;
exports.getBookings = getBookings;
exports.deleteBooking = deleteBooking;
exports.getBookingById = getBookingById;
