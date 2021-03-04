const mongoose = require ('mongoose');

const RouteSchema = mongoose.Schema({
    destination_to:{type : mongoose.Schema.ObjectId, ref : 'Destination'},
    destination_from:{type : mongoose.Schema.ObjectId, ref : 'Destination'}
},{ timestamps: true});

const RouteModel = mongoose.model('Route', RouteSchema);
module.exports =RouteModel;
