/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const {db} = require('../index');

exports.addUser = onRequest((request, response) => {
  const data = request.body; // Get the request body

  // Add the data to Firestore
  db.collection('users')
    .add(data)
    .then(() => {
      response.send('Usuario añadido con éxito');
    })
    .catch((error) => {
        logger.error('Error añadiendo un usuario: ', error);
        console.error('Error añadiendo un usuario: ', error);
      response.status(500).send('Error añadiendo un usuario: ');
    });
});


// exports.calculateSum = functions.https.onRequest((request, response) => {
//     const { num1, num2 } = request.query; // Retrieve query parameters
  
//     // Perform the calculation
//     const sum = parseInt(num1) + parseInt(num2);
  
//     // Send the result as a response
//     response.send(`The sum is: ${sum}`);
//   });
  
