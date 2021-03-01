const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
    title: { type: String, required: true },
    title_image: { type: String },
    rating: [{type : Number}],
    introduction: { type: String, required: true },
    attraction_photos: [{
        title: { type: String },
        path: { type: String }
    }],
    photos: [{ type: String }],
    guidelines: { type: String, required: true },
    history: { type: String, required: true }, 
}, { timestamps: true });

module.exports = mongoose.model('Destination', DestinationSchema);