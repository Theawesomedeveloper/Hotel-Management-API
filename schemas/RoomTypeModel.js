// Importing necessary modules
const {Schema, model} = require('mongoose')

const roomTypeSchema = new Schema({
    type: {
        type: String,
        required: true,
        // unique: true
    },
    maxOccupancy: {
        type: Number,
        required: true
    },
    bathroom: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bedCount: {
        type: Number,
        required: true
    },
    "amenities": [String],

}, { timestamps: true });


// Creating a mongoose model using the imported module
const RoomType = model('RoomType', roomTypeSchema);


/**
 * @exports
 */
module.exports = {RoomType, roomTypeSchema}