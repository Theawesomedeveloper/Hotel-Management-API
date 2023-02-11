

/**
 * importing the connect function from mongoose module
 */
const { connect } = require('mongoose');
const {URI}  = require('./CONFIG')



/**
 * uses the mongoose connect method to connect my mongoDb database
 * @async
 * @function connect to a mongoDb database
 * @returns {void}
 */

async function connectToDatabase() {
   try {
      await connect(URI)
         .then(() => console.log(`successfully connected to database`))
         .catch(error => {throw error})
   } catch (error) {
      console.error(`failed to connect to database: ${error.message}`)
   }
}




/**
 * @exports 
 * @module connectToDatabase
 */
module.exports = connectToDatabase;