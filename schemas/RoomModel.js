
// Importing the necessary modules
    
const {Schema, model} = require('mongoose')
const {roomTypeSchema} = require('./RoomTypeModel')




// Room Collection Schema
const roomSchema = new Schema({
    roomId: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    roomType: roomTypeSchema
}, { timestamps: true });

const Room = model('Room', roomSchema)


/**
 * @function Room Collection/ Document model
 * @exports
 */
module.exports = { Room };

