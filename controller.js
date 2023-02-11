
// IMPORTING MY DATABASE MODELS
const { Room } = require('./schemas/RoomModel');
const { RoomType } = require('./schemas/RoomTypeModel')



/**
 * @class
 */
class Controller {




    /**
     * @function creates a Roomtype
     * @param {*} req 
     * @param {*} res 
     */
    createRoomType(req, res) {
        try {

            // getting the request from the body
            const newRoomType = new RoomType(req.body);

            newRoomType.save()
                .then(function (data) {
                    res.status(201)
                        .send({ success: true, data })
                })
                .catch(error => { throw error })

        } catch (error) {
            res.status(500)
                .send({ message: error.message, success: false })
        }
    }



    /**
     * this fetches all room types from the RoomType collection and sends it as response 
     * @param {*} req 
     * @param {*} res 
     */
    getAllRoomTypes(req, res) {
        try {
            RoomType.find({}, { __v: 0 })
                .then((data) => {

                    res.status(200)
                        .send({ success: true, data: data })
                })

        } catch (error) {
            // console.error(`Fix me ${error.message}`)
            res.status(500)
                .send({ message: error.message, success: false })
        }
    }

    /**
     * this fetches all room types from the RoomType collection and sends it as response 
     * @param {*} req 
     * @param {*} res 
     */
    getRoomType(req, res) {
        try {
            RoomType.findOne({type: req.params.roomtype}, { __v: 0 })
                .then((data) => {
                    res.status(200)
                        .send({ success: true, data: data })
                });

        } catch (error) {
            // console.error(`Fix me ${error.message}`)
            res.status(500)
                .send({ message: error.message, success: false })
        }
    }



    /**
     * Removes a room type from the Roomtypes collections
     * @param {*} req 
     * @param {*} res 
     */
    deleteRoomType(req, res) {
        try {
            const { roomtype } = req.params
            RoomType.findOneAndDelete({ type: roomtype })
                .then(data => {
                    res.status(200)
                        .send({ success: true, data })
                })
                .catch(err => console.log(err))


        } catch (error) {
            res.status(500)
                .send({ message: error.message, success: false })
        }
    }


    /**
     * Edits a room type in the room type collection
     * @param {*} req 
     * @param {*} res 
     */
    editRoomType(req, res) {
        try {
            const { roomtype } = req.params;

            RoomType.findOneAndUpdate({ type: roomtype }, req.body)
                .then(() => {
                    res.status(200)
                        .send({ success: true })
                })


        } catch (error) {
            res.status(304)
                .send({ message: error.message, success: false })
        }
    }



    /**
     * Fetches all rooms document from the Rooms collection
     * @param {*} req 
     * @param {*} res 
     */
    getAllRooms(req, res) {
        try {
            Room.find({}, { __v: 0 }).then((data) => {
                res.status(200)
                    .send({ success: true, data: data })
            })

        } catch (error) {
            res.status(500)
                .send({ message: error.message, success: false })
        }
    }


    /**
     * Fetches q room document from the Rooms collection
     * @param {*} req 
     * @param {*} res 
     */
    getRoom(req, res) {
        try {
            Room.findOne(req.params, { __v: 0 }).then((data) => {
                res.status(200)
                    .send({ success: true, data: data })
            })

        } catch (error) {
            res.status(500)
                .send({ message: error.message, success: false })
        }
    }


    /**
     * Creates a room Document in the rooms collection
     * @param {*} req 
     * @param {*} res 
     */
    createRoom(req, res) {
        try {

            RoomType.find({ type: req.body.roomType })
                .then(foundRooms => {
                    const [foundRoom] = foundRooms
                    if (!foundRoom) {
                        // res.status(404).send({ message: error.message, success: false })
                        throw new Error('RoomType not found')
                    }
                    console.log(foundRoom);

                    const room = new Room({
                        ...req.body,
                        roomType: foundRoom
                    })

                    room.save()
                        .then((data) => {
                            res.status(200)
                                .send({ success: true, data: data })
                        })
                })


        } catch (error) {
            res.status(500)
                .send({ message: error.message, success: false })
        }
    }



    /**
     * Deletes a specified room from the Rooms document
     * @param {*} req 
     * @param {*} res 
     */
    deleteRoom(req, res) {

        Room.findOneAndDelete(req.params)
            .then(data => {
                res.status(200)
                    .send({ success: true, data: data })

            })

    }

    /**
     * Edits a room in the rooms collection
     * @param {*} req 
     * @param {*} res 
     */
    editRoom(req, res) {
        Room.findOneAndUpdate(req.params, req.body)
            .then(data => {
                console.log(data);

            })
    }

}



/**
 * @exports 
 * @function instance oof the Controller class
 */
module.exports = new Controller;