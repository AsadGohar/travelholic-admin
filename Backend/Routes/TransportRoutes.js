const express = require('express');
const TransportControllers = require('../Controllers/TransportControllers');
const { check } = require('express-validator');
const router = express.Router();


// Create a Transport
router.post('/', TransportControllers.createTransport);

// Add Route to Transport
router.post('/route/:id', TransportControllers.addRoutetoTransport);

//Get all Transports
router.get('/', TransportControllers.getTransports);

//Get Does Route Exist Value
router.get('/exist', TransportControllers.doesRouteExist);

//Get Transport By Destinations
router.get('/destinations', TransportControllers.getTransportByDestinations);

//Get Transport by ID
router.get('/:id', TransportControllers.getTransportById);

//Update a Transport
router.put('/:id', check('fare').isLength({min: 2, max: 5}), TransportControllers.updateTransport);

//Delete a Transport
router.delete('/:id', TransportControllers.deleteTransport);

module.exports = router;
