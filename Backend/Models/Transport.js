const mongoose = require ('mongoose');

const TransportSchema = mongoose.Schema({
    name: { type: String , required:true},
    route:{type : mongoose.Schema.ObjectId, ref : 'Route'},
    fare:{type:Number,required:true},
},{ timestamps: true});

const TansportModel = mongoose.model('Transport', TransportSchema);
module.exports = TansportModel;
