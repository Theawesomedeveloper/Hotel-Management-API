

// IMPORTING THE NECESSARY MODULES
const express = require('express')
const {getRoomType, getAllRoomTypes, createRoomType, deleteRoomType, editRoomType } = require('../controller')

const router = express.Router()


router.get('/', getAllRoomTypes)

router.get('/:roomtype', getRoomType)

router.post('/', createRoomType)

router.delete('/:roomtype', deleteRoomType)

router.patch('/:roomtype', editRoomType)


/**
 * @exports router
 */
module.exports = router