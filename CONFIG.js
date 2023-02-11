require('dotenv').config()


const PORT = process.env.process || 3000;
const URI = `mongodb+srv://Learnable:${process.env.URI_PASSWORD}@learnable.gdwlgzb.mongodb.net/HotelDB`

// console.log(process.env.URI_PASSWORD);







module.exports = {PORT, URI}