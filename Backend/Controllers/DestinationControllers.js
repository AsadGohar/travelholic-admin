const Destination = require('../Models/Destination');
const { validationResult } = require('express-validator');
const HttpError = require('../Models/HttpError');


// CREATE NEW DESTINATION
const createDestination = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
            new HttpError('Invalid input. Check your data', 422)
        );
    }

    const { title, title_image, introduction, attraction_photos, photos, guidelines, history} = req.body;

    const createdDestination = new Destination({
        title,
        title_image,
        introduction,
        attraction_photos,
        photos,
        guidelines,
        history
    });

    try {
        await createdDestination.save();
    } catch (err) {
        const error = new HttpError(
            'Creating destination failed, please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({ destination: createdDestination });
}


//GET ALL DESTINATIONS
const getDestinations = async (req, res, next) => {
    let destinations;
    try {
        destinations = await Destination.find();
    } catch (err) {
        const error = new HttpError(
            'Unknown error occured while getting destinations, please try again.',
            500
        );
        return next(error);
    }
    res.send(destinations);
}

// GET DESTINATION BY ID
const getDestinationById = async (req, res, next) => {
    const destId = req.params.id;
    let destination;
    try {
        destination = await Destination.findById(destId);
    } catch (err) {
        const error = new HttpError(
            'Unknown error occured while getting destination, please try again.',
            500
        );
        return next(error);
    }

    if (!destination) {
        const error = new HttpError(
            'Could not find a destination for the provided id.',
            404
        );
        return next(error);
    }

    res.json(destination);
}

// UPDATE DESTINATION 
const updateDestination = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
            new HttpError('Invalid input. Check your data', 422)
        );
    }
    
    const { title, title_image,introduction, attraction_photos, photos, guidelines, history } = req.body;
    const destId = req.params.id;

    let destination;
    try {
        destination = await Destination.findById(destId);
    } catch (err) {
        const error = new HttpError(
            'Unknown error occured while updating destination, please try again.',
            500
        );
        return next(error);
    }

    destination.title = title;
    destination.title_image = title_image;
    destination.introduction = introduction;
    destination.attraction_photos = attraction_photos;
    destination.photos = photos;
    destination.guidelines = guidelines;
    destination.history = history;
    try{
        await destination.save();
    }catch (err){
        const error = new HttpError(
            'Something went wrong, could not update place.',
            500
          );
          return next(error);
    }
    res.json(destination);
}

// DELETE DESTINATION
const deleteDestination = async (req, res, next) => {
    const destId = req.params.id;
    let destination;
    try {
        destination = await Destination.findById(destId);
    } catch (err) {
        const error = new HttpError(
            'Unknown error occured while deleting destination, please try again.',
            500
        );
        return next(error);
    }

    try {
        await destination.remove();
    } catch (err) {
        const error = new HttpError(
            'Unknown error occured while deleting destination, please try again.',
            500
        );
        return next(error);
    }

    res.status(200).json({ message: 'Destination has been deleted' });
}


// EXPORTING ALL CONTROllERS HERE
exports.createDestination = createDestination;
exports.getDestinations = getDestinations;
exports.getDestinationById = getDestinationById;
exports.updateDestination = updateDestination;
exports.deleteDestination = deleteDestination;