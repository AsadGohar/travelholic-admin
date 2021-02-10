const Hotel = require('../Hotel/Booking');
const HttpError = require('../Models/HttpError');


// CREATE HOTEL INFORMATION
const createHotelInfo = async (req, res, next) => {
    const { title, luxury_rent , budget_rent ,contact_number } = req.body;

    const createdHotelInfo = new HotelInfo({
        title,
        luxury_rent,
        budget_rent,
        contact_number
        

    });

    try {
        await createdHotelInfo.save();
    } catch (err) {
        const error = new HttpError(
            'Entering Hotel Information Failed Try again',
            500
        );
        return next(error);
    }

    res.status(201).json({ hotel: createdHotelInfo });
}


//GET ALL HOTELS INFORMATION
const getHotelInfo = async (req, res, next) => {
    let hotels;
    try {
        hotels = await Hotel.find();
    } catch (err) {
        const error = new HttpError(
            'Unknown error occured while getting Hotels Information, please try again.',
            500
        );
        return next(error);
    }
    res.json({hotels: hotels.map(hotel => hotel.toObject({ getters: true }))});
}




// UPDATE DESTINATION 
const updateHotelInfo = async (req, res, next) => {
    const {title, luxury_rent , budget_rent ,contact_number } = req.body;
    const hotelId = req.params.id;

    let hotel;
    try {
        hotel = await Hotel.findById(hotelId);
    } catch (err) {
        const error = new HttpError(
            'Unknown error occured while updating Hotel Info, please try again.',
            500
        );
        return next(error);
    }

    hotel.title = title;
    hotel.luxury_rent = luxury_rent;
    hotel.budget_rent  = budget_rent ;
    hotel.contact_number = contact_number;


    try{
        await hotel.save();
    }catch (err){
        const error = new HttpError(
            'Something went wrong, could not update hotel.',
            500
          );
          return next(error);
    }
    res.json(hotel);
}

// DELETE HOTEL INFORMATION
const deleteHotelInfo = async (req, res, next) => {
    const hotelId = req.params.id;
    let hotel;
    try {
        hotel = await Hotel.findById(hotelId);
    } catch (err) {
        const error = new HttpError(
            'Unknown error occured while deleting Hotel, please try again.',
            500
        );
        return next(error);
    }

    try {
        await hotel.remove();
    } catch (err) {
        const error = new HttpError(
            'Unknown error occured while deleting Hotel, please try again.',
            500
        );
        return next(error);
    }

    res.status(200).json({ message: 'Hotel Info has been deleted' });
}

// EXPORTING ALL CONTROllERS HERE
exports.createHotelInfo = createHotelInfo;
exports.getHotelInfo = getHotelInfo;
exports.updateHotelInfo = updateHotelInfo;
exports.deleteHotelInfo = deleteHotelInfo;
