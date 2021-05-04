const express = require ('express');
const router = express.Router();

const TripPlannerDestinationControllers = require('../Controllers/TripPlannerDestinationController')

router.post('/', TripPlannerDestinationControllers.createTripPlannerDestination )
router.get('/', TripPlannerDestinationControllers.getAllTripPlannerDestionations )
router.get('/:id', TripPlannerDestinationControllers.getTripPlannerDestionationById )

module.exports = router;