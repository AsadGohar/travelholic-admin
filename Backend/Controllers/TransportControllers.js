const Transport = require('../Models/Transport');
const HttpError = require('../Models/HttpError');
const { validationResult } = require('express-validator');

// ADD NEW TRANSPORT COMPANY
const createTransport = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }

    const { name, route, fare } = req.body
    const createdTransport = new Transport({
        name,
        route,
        fare
    });

    try {
        await createdTransport.save();
    } catch (err) {
        const error = new HttpError(
            'Creating Transport failed, please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({ transport: createdTransport });
}

// GET ALL TRANSPORT COMPANIES
const getTransports = async (req, res, next) => {
    let transports
    try {
        transports = await Transport.find();
    } catch (err) {
        const error = new HttpError(
            'Finding transports failed, please try again.',
            500
        );
        return next(error);
    }
    res.send(transports);
}

// GET A SPECIFIC TRANSPORT COMPANY BY ID
const getTransportById = async (req, res, next) => {
    const transportId = req.params.id;
    let transport;
    try {
        transport = await Transport.findById(transportId);
    } catch (err) {
        const error = new HttpError(
            'Finding required transport failed, please try again.',
            500
        );
        return next(error);
    }

    if (!transport) {
        const error = new HttpError(
            'Could not find a transport for the provided id.',
            404
        );
        return next(error);
    }

    res.json(transport);
}

// UPDATE A SPECIFIC TRANSPORT COMPANY
const updateTransport = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }
    
    const { name, fare } = req.body;
    const transportId = req.params.id;

    let transport;
    try {
        transport = await Transport.findById(transportId);
    } catch (err) {
        const error = new HttpError(
            'Unknown error occured while updating transport, please try again.',
            500
        );
        return next(error);
    }

    transport.name = name;
    transport.fare = fare;

    try {
        await transport.save();
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not update transport.',
            500
        );
        return next(error);
    }
    res.json(transport);
}

// DELETE A TRANSPORT
const deleteTransport = async (req, res, next) => {
    const transportId = req.params.id;
    let transport;
    try {
        transport = await Transport.findById(transportId);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not find transport for deletion.',
            500
        );
        return next(error);
    }

    try {
        await transport.remove();
    } catch (err) {
        const error = new HttpError(
            'Unknown error occured while deleting transport, please try again.',
            500
        );
        return next(error);
    }
    res.status(200).json({ message: 'Transport has been deleted' });

}


// EXPORTING ALL CONTROllERS HERE
exports.createTransport = createTransport;
exports.getTransports = getTransports;
exports.getTransportById = getTransportById;
exports.updateTransport = updateTransport;
exports.deleteTransport = deleteTransport;