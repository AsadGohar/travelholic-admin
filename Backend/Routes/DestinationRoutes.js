const express = require('express');
const DestinationControllers = require('../Controllers/DestinationControllers');
const { check } = require('express-validator');
const router = express.Router();
const { auth } = require('../middleware/auth')


// Create a Destination
router.post('/',
    [
        check('title').not().isEmpty().isLength({ max: 40 }),
        check('introduction').not().isEmpty().isLength({ min: 10, max: 600 })
    ],
    DestinationControllers.createDestination);

//Get all Destinations
router.get('/', DestinationControllers.getDestinations);

//Get Destination by ID
router.get('/:id', DestinationControllers.getDestinationById);

//Update a Destination
router.put('/:id',
    [
        check('title').not().isEmpty().isLength({ max: 40 }),
        check('introduction').not().isEmpty().isLength({ min: 10, max: 600 })
    ],
    DestinationControllers.updateDestination);

//Delete a Destination
router.delete('/:id', DestinationControllers.deleteDestination);


//Rate a Destination
router.post('/:id/rating', auth, DestinationControllers.rateDestination);


module.exports = router;
