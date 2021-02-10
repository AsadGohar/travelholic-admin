const express = require ('express');
const router = express.Router();

const TripControllers = require('../Controllers/TripControllers')

router.post('/', TripControllers.createTrip)
router.get('/', TripControllers.getTrips)
router.get('/:id', TripControllers.getTripsbyId)
router.delete('/:id', TripControllers.deleteTripById)

module.exports = router
