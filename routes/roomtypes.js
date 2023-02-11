

// IMPORTING THE NECESSARY MODULES
const express = require('express')
const { getAllRoomTypes, createRoomType, deleteRoomType, editRoomType } = require('../controller')

const router = express.Router()


router.get('/', getAllRoomTypes)

router.post('/', createRoomType)

router.delete('/:roomtype', deleteRoomType)

router.patch('/:roomtype', editRoomType)


/**
 * @exports router
 */
module.exports = router