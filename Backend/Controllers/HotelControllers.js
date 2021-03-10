const Hotel = require('../Models/Hotel');
const HttpError = require('../Models/HttpError');
const { validationResult } = require('express-validator');

// ADD NEW HOTEL COMPANY
const createHotel = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }



// CREATE HOTEL INFORMATION

    const { title, luxury_rent, budget_rent, contact_number } = req.body
    const createdHotel = new Hotel({
        title,
        luxury_rent,
        budget_rent,
        contact_number
    });

    try {
        await createdHotel.save();
    } catch (err) {
        const error = new HttpError('Creating Hotel failed, please try again.',500);
        return next(error);
    }

    res.status(201).json({ Hotel: createdHotel });
}

// GET ALL HOTEL COMPANIES
const getHotels = async (req, res, next) => {
    let Hotels
    try {
        Hotels = await Hotel.find();
    } catch (err) {
        const error = new HttpError('Finding Hotels failed, please try again.',500);
        return next(error);
    }
    res.send(Hotels);
}

// GET A SPECIFIC Hotel COMPANY BY ID
const getHotelById = async (req, res, next) => {
    const hotelId = req.params.id;
    let Hotel;
    try {
        Hotel = await Hotel.findById(hotelId);
    } catch (err) {
        const error = new HttpError(
            'Finding required Hotel failed, please try again.',
            500
        );
        return next(error);
    }

    if (!Hotel) {
        const error = new HttpError(
            'Could not find a Hotel for the provided id.',
            404
        );
        return next(error);
    }

    res.send(Hotel);
}

// UPDATE A SPECIFIC Hotel COMPANY
const updateHotel = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }
    
    const { title, luxury_rent, budget_rent, contact_number  } = req.body;
    const hotelId = req.params.id;

    let hotel;
    try {
        hotel = await Hotel.findById(hotelId);
    } catch (err) {

        const error = new HttpError('Unknown error occured while updating Hotel, please try again.',500);
        return next(error);
    }

    hotel.title = title;
    hotel.luxury_rent = luxury_rent;
    hotel.budget_rent = budget_rent;
    hotel.contact_number = contact_number;

    try {
        await hotel.save();

    } catch (err) {
        const error = new HttpError('Something went wrong, could not update Hotel.', 500);
        return next(error);
    }
    res.json(hotel);
}

// DELETE A Hotel
const deleteHotel = async (req, res, next) => {
    const hotelId = req.params.id;
    let hotel;
    try {
        hotel = await Hotel.findById(hotelId);
    } catch (err) {
        const error = new HttpError('Something went wrong, could not find Hotel for deletion.',500);
        return next(error);
    }

    try {
        await hotel.remove();
    } catch (err) {
        const error = new HttpError('Unknown error occured while deleting Hotel, please try again.',500);
        return next(error);
    }
    res.status(200).json({ message: 'Hotel has been deleted' });

}


// EXPORTING ALL CONTROllERS HERE
exports.createHotel = createHotel;
exports.getHotels = getHotels;
exports.getHotelById = getHotelById;
exports.updateHotel = updateHotel;
exports.deleteHotel = deleteHotel;