
// IMPORTING THE NECESSARY MODULES
const express = require('express')
const { getRoom, getAllRooms, createRoom, deleteRoom, editRoom } = require('../controller')
const router = express.Router()





router.get('/', getAllRooms);

router.get('/:roomId', getRoom);

router.post('/', createRoom);

router.delete('/:roomId', deleteRoom);

router.patch('/:roomId', editRoom);


module.exports = router; 