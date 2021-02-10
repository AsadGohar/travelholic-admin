const express = require('express');
const ReviewControllers = require('../Controllers/ReviewControllers');
const { check } = require('express-validator');
const router = express.Router();


// Create a Review
router.post('/', check('text').not().isEmpty().isLength({max: 200}), ReviewControllers.createReview);

//Get all Reviews
router.get('/', ReviewControllers.getReviews);

//Get Review by ID
router.get('/:id', ReviewControllers.getReviewById);

//Delete a Review
router.delete('/:id', ReviewControllers.deleteReview);

module.exports = router;