const mongoose = require ('mongoose');

const TripPlannerDestinationSchema = mongoose.Schema({
    name: { type: String , required:true},
},{ timestamps: true});

const TripPlannerDestinationModel = mongoose.model('TripPlannerDestination', TripPlannerDestinationSchema);

module.exports =TripPlannerDestinationModel;
