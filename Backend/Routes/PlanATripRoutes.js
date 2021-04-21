const express = require ('express');
const router = express.Router();

const PlanATripControllers = require('../Controllers/PlanATripController')

router.get('/estimate', PlanATripControllers.getTripPlanEstimate )

module.exports = router;
