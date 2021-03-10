const Review = require('../Models/Review');
const HttpError = require('../Models/HttpError');
const { validationResult } = require('express-validator');


// POST A REVIEW
const createReview = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
            new HttpError('Invalid input. Check your data', 422)
        );
    }

    const { text, reported } = req.body;
    const createdReview = new Review({
        text,
        reported
    });

    try {
        await createdReview.save();
    } catch (err) {
        const error = new HttpError('Creating review failed, please try again.',500);
        return next(error);
    }

    res.status(201).json({ review: createdReview });
}

// GET ALL REVIEWS
const getReviews = async (req, res, next) => {
    let reviews;
    try {
        reviews = await Review.find();
    } catch (err) {
        const error = new HttpError('Unknown error occured while getting reviews, please try again.',500);
        return next(error);
    }
    res.send(reviews);
}

// GET REVIEW BY ID
const getReviewById = async (req, res, next) => {
    const reviewId = req.params.id;
    let review;
    try {
        review = await Review.findById(reviewId);
    } catch (err) {
        const error = new HttpError('Unknown error occured while getting review, please try again.', 500);
        return next(error);
    }

    if (!review) {
        const error = new HttpError('Could not find a review for the provided id.',404);
        return next(error);
    }

    res.json(review);
}

// DELETE REVIEW
const deleteReview = async (req, res, next) => {
    const reviewId = req.params.id;
    let review;
    try {
        review = await Review.findById(reviewId);
    } catch (err) {
        const error = new HttpError('Unknown error occured while deleting review, please try again.',500);
        return next(error);
    }

    try {
        await review.remove();
    } catch (err) {
        const error = new HttpError('Unknown error occured while deleting review, please try again.',500);
        return next(error);
    }

    res.status(200).json({ message: 'review has been deleted' });
}


// EXPORTING ALL CONTROllERS HERE
exports.createReview = createReview;
exports.getReviews = getReviews;
exports.getReviewById = getReviewById;
exports.deleteReview = deleteReview;
