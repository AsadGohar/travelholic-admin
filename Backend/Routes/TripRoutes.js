const express = require ('express');
const router = express.Router();

const TripControllers = require('../Controllers/TripControllers')

router.post('/', TripControllers.createTrip)

router.route('/').get(TripControllers.getTrips)

router.get('/admin', TripControllers.getTripsAdmin)

router.get('/:id', TripControllers.getTripbyId)

router.delete('/:id', TripControllers.deleteTripById)

module.exports = router
