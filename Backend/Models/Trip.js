const mongoose = require ('mongoose');

const ItinerarySchema = mongoose.Schema({
    day: {type : Number,required:true},
    description:{type:String,required:true}
},{ timestamps: true});

module.exports.ItinerarySchema = mongoose.model('Itinerary', ItinerarySchema);

const TripSchema = mongoose.Schema({
    title: { type: String , required:true},
    price: {type:Number , required: true},
    description: { type: String , required:true},
    rating:{type:Number,required:true},
    attractions:{type:String,required:true},
    excludes:{type:String,required:true},
    service_provided:{type:String,required:true},
    display_image:{type:String,required:true},
    start_date:{type:Date,required:true},
    end_date:{type:Date,required:true},
    itinerary:[ItinerarySchema],
    reviews:[{type : mongoose.Schema.ObjectId, ref : 'Reviews'}],
    company:{type :String,required:true}
},{ timestamps: true});

const TripModel = mongoose.model('Trip', TripSchema);
module.exports = TripModel;
