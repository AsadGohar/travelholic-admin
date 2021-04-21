const TransportModel = require('../Models/Transport');
const HttpError = require('../Models/HttpError');
const { validationResult } = require('express-validator');

// ADD NEW TRANSPORT COMPANY
const createTransport = async (req, res, next) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return next(
    //         new HttpError('Invalid inputs passed, please check your data.', 422)
    //     );
    // }

    const { name, route } = req.body
    const createdTransport = TransportModel()
    createdTransport.name=name;
    createdTransport.routes.push(route)

    try {
        await createdTransport.save();
    } catch (err) {
        const error = new HttpError('Creating Transport failed, please try again.',500);
        return next(error);
    }

    res.status(201).json({ transport: createdTransport });
}

// GET ALL TRANSPORT COMPANIES
const getTransports = async (req, res, next) => {
    let transports
    try {
        transports = await TransportModel.find().populate('routes.destination_to routes.destination_from','name').exec();
    } catch (err) {
        const error = new HttpError('Finding transports failed, please try again.',500);
        return next(error);
    }
    res.send(transports);
}

// GET A SPECIFIC TRANSPORT COMPANY BY ID
const getTransportById = async (req, res, next) => {
    const transportId = req.params.id;
    let transport;
    try {
        transport = await TransportModel.findById(transportId).populate('routes.destination_to routes.destination_from','name').exec();
    } catch (err) {
        const error = new HttpError('Finding required transport failed, please try again.',500);
        return next(error);
    }

    if (!transport) {
        const error = new HttpError('Could not find a transport for the provided id.',404);
        return next(error);
    }

    res.json(transport);
}

// GET A SPECIFIC TRANSPORT COMPANY BY ROUTES
const getTransportByDestinations = async (req, res, next) => {
    const {destinations} =req.body
    let transport;
    try {
         transport = await TransportModel.find
        ( 
          {"routes": 
            {
              $elemMatch: { 
                'destination_from':destinations[0],  
                'destination_to':destinations[1]
              } 
            }
          }
        ).sort({'routes.fare':1}).select('-routes');
    } catch (err) {
        const error = new HttpError('Finding required transport failed, please try again.',500);
        return next(error);
    }

    if (!transport) {
        const error = new HttpError('Could not find a transport for the provided id.',404);
        return next(error);
    }

    res.json(transport);
}

// ADD A ROUTE TO A TRANSPORT
const addRoutetoTransport = async (req, res, next) => {
    
    const transportId = req.params.id;
    const {route} = req.body
    console.log(route.destination_to)
    console.log(route.destination_from)
    let transport;
    try {
        transport = await TransportModel.find( {'_id':transportId, "routes": { 
        $elemMatch: { 'destination_to':route.destination_to,  'destination_from':route.destination_from} } } );
        // transport = await TransportModel.find({'_id':transportId,'routes.destination_to':route.destination_to,'routes.destination_from':route.destination_from}).populate('routes.destination_to routes.destination_from','name').exec();
        // transport.routes.push(route)
        // transport.save()
    } catch (err) {
        const error = new HttpError('Finding required transport failed, please try again.',500);
        return next(error);
    }

    if ((transport).length===0) {
       let ntransport = await TransportModel.findByIdAndUpdate(transportId,
            { 
              "$push": { "routes": route } 
            },{returnOriginal:false}
          ).populate('routes.destination_to routes.destination_from','name').exec();;
        res.send(ntransport)
    }
    else {
        const error = new HttpError('Route Already Added',500);
        return next(error);
    }
    // res.json(transport);
}



//DOES A TRANSPORT HAS A ROUTE BETWEEN TWO DESTINATIONS
const doesRouteExist = async (req, res, next) => {
    
    const {route} = req.body
    console.log(route.destination_to)
    let transport;
    try {
        transport = await TransportModel.find( {"routes": { 
        $elemMatch: { 'destination_to':route.destination_to,  'destination_from':route.destination_from} } } );
    } catch (err) {
        const error = new HttpError('Finding required transport failed, please try again.',500);
        return next(error);
    }

    if (transport.length===0) {
        res.send({exist:false})
    }
    else {
        res.send({exist:true})
    }
    // res.json(transport);
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
        transport = await TransportModel.findById(transportId);
    } catch (err) {
        const error = new HttpError('Unknown error occured while updating transport, please try again.',500);
        return next(error);
    }

    transport.name = name;
    transport.fare = fare;

    try {
        await transport.save();
    } catch (err) {
        const error = new HttpError('Something went wrong, could not update transport.',500);
        return next(error);
    }
    res.json(transport);
}

// DELETE A TRANSPORT
const deleteTransport = async (req, res, next) => {
    const transportId = req.params.id;
    let transport;
    try {
        transport = await TransportModel.findById(transportId);
    } catch (err) {
        const error = new HttpError('Something went wrong, could not find transport for deletion.',500);
        return next(error);
    }

    try {
        await transport.remove();
    } catch (err) {
        const error = new HttpError('Unknown error occured while deleting transport, please try again.',500);
        return next(error);
    }
    res.status(200).json({ message: 'Transport has been deleted' });

}


// EXPORTING ALL CONTROllERS HERE
exports.createTransport = createTransport;
exports.getTransports = getTransports;
exports.getTransportById = getTransportById;
exports.getTransportByDestinations = getTransportByDestinations;
exports.updateTransport = updateTransport;
exports.deleteTransport = deleteTransport;
exports.addRoutetoTransport = addRoutetoTransport
exports.doesRouteExist = doesRouteExist
