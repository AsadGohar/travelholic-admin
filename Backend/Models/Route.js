const mongoose = require ('mongoose');

const RouteSchema = mongoose.Schema({
    destination_one:{type : mongoose.Schema.ObjectId, ref : 'Destination'},
    destination_two:{type : mongoose.Schema.ObjectId, ref : 'Destination'}
},{ timestamps: true});

const RouteModel = mongoose.model('Route', RouteSchema);
module.exports =RouteModel;
