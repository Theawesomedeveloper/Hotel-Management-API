/*In an ongoing hotel management project, the backend developer having looked at the Figma design, is tasked to chunk out some APIs in Vanilla Javascript using NodeJs and ExpressJs for the frontend to consume;

root ====== localhost/rooms GET





To create many room types (Must have codeName, prize) 
Edit room type 
Delete Room type 

Fetch single room type with id
Fetch many room types
Search and filter rooms based on its name, types and prices


GET /rooms = returns all rooms
POST /createroom?name=""&price=""&roomType="type"    = creates a room
PATCH /roomtype
DELETE /roomtype
FETCH /


*/

/**
 * Importing the necessary modules
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')


/**
 * Importing user defined modules
 */
const connectToDatabase = require('./database');
const {PORT} = require('./CONFIG')



// IMPORTING ROUTES
const roomtypes = require('./routes/roomtypes')
const rooms = require('./routes/rooms')


// running the express function 
const app = express()



// configuring my server
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())




// Allowing express to route modules
app.use('/api/roomtypes', roomtypes)

app.use('/api/rooms', rooms)


// express to listen for requests 
app.listen(PORT, function () {
    connectToDatabase()
    console.log(`Server running on 127.0.0.1:${PORT}`)
})
