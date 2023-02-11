
// IMPORTING THE NECESSARY MODULES
const express = require('express')
const { getAllRooms, createRoom, deleteRoom, editRoom } = require('../controller')
const router = express.Router()





router.get('/', getAllRooms);

router.post('/', createRoom);

router.delete('/:roomId', deleteRoom);

router.patch('/:roomId', editRoom);


module.exports = router; 