const TripModel = require('../Models/Trip');
const HttpError = require('../Models/HttpError');

//ADD A TRIP
const createTrip = async (req, res, next) => {

  const { title, price, description, rating, attractions, excludes, service_provided, display_image, start_date, end_date, itinerary, reviews, numReviews, company } = req.body
  let trip = TripModel()
  trip.title = title
  trip.price = price
  trip.description = description
  trip.rating = rating
  trip.attractions = attractions
  trip.excludes = excludes
  trip.service_provided = service_provided
  trip.display_image = display_image
  trip.start_date = start_date
  trip.end_date = end_date
  trip.itinerary = itinerary
  trip.reviews = reviews
  trip.company = company
  trip.numReviews = numReviews

  try {
    await trip.save()
  } catch (err) {
    const error = new HttpError('creating Trip failed, please try again', 500);
    return next(error);
  }
  res.status(201).send(trip);
}

//GET ALL TRIPS
const getTrips = async (req, res, next) => {

  let trips
  try {
    trips = await TripModel.find()
  }
  catch (err) {
    const error = new HttpError('finding Trips failed, please try again', 500);
    return next(error);
  }

  if (!trips) {
    const error = new HttpError('could not find trips', 404);
    return next(error);
  }

  res.send(trips)
}

//GET ANSWERS ADMIN
const getTripsAdmin = async (req, res, next) => {
  TripModel.find().populate('user', 'name -_id').exec(function (err, data) {
    if (err) {
      const error = new HttpError('getting Answers failed, please try again', 500);
      return next(error);
    }
    else {
      res.send(data)
    }
  })
}


//GET TRIP BY ID
const getTripbyId = async (req, res, next) => {

  let id = req.params.id
  let trip
  try {
    trip = await TripModel.findById(id)
  }
  catch (err) {
    const error = new HttpError('finding Trip failed, please try again', 500);
    return next(error);
  }

  if (!trip) {
    const error = new HttpError('could not find a trip by that id', 404);
    return next(error);
  }

  res.send(trip)
}

//DELETE TRIP BY ID
const deleteTripById = async (req, res, next) => {

  let id = req.params.id
  let trip
  try {
    trip = await TripModel.findByIdAndDelete(id)
  }
  catch (err) {
    const error = new HttpError('deleting Trip failed, please try again', 500);
    return next(error);
  }

  if (!trip) {
    const error = new HttpError('could not find a trip by that id', 404);
    return next(error);
  }

  res.send(trip)
}

//EXPORTING CONTROLLERS
module.exports.createTrip = createTrip
module.exports.getTrips = getTrips
module.exports.getTripsAdmin = getTripsAdmin
module.exports.getTripbyId = getTripbyId
module.exports.deleteTripById = deleteTripById
