const express = require('express');
const DestinationControllers = require('../Controllers/DestinationControllers');
const { check } = require('express-validator');
const router = express.Router();


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

//Rate Destination API
router.patch('/:id', DestinationControllers.rateDestination); 

//Delete a Destination
router.delete('/:id', DestinationControllers.deleteDestination);


module.exports = router;
