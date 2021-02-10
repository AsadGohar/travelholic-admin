const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
    title: { type: String , required:true},
    title_image: {type: String, required: true},
    route:{type : mongoose.Schema.ObjectId, ref : 'Route'},
    rating:{type: Number, required:true},
    introduction:{type:String,required:true},
    attraction_photos:[{type:String}],
    photos:[{type:String}],
    guidelines:{type:String,required:true},     
    history:{type:String,required:true},
    is_trip_planner:{type:Boolean,required:true},
    next:[{type : mongoose.Schema.ObjectId, ref : 'Destination'}],
},{ timestamps: true});

module.exports = mongoose.model('Destination', DestinationSchema);