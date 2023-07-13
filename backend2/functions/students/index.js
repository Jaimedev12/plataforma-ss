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

exports.addStudent = onRequest((request, response) => {
  const data = request.body; // Get the request body

  // Add the data to Firestore
  db.collection('students')
    .add(data)
    .then(() => {
      response.send('Estudiante añadido con éxito');
    })
    .catch((error) => {
        logger.error('Error añadiendo un estudiante: ', error);
        console.error('Error añadiendo un estudiante: ', error);
      response.status(500).send('Error añadiendo un estudiante: ');
    });
});


// exports.calculateSum = functions.https.onRequest((request, response) => {
//     const { num1, num2 } = request.query; // Retrieve query parameters
  
//     // Perform the calculation
//     const sum = parseInt(num1) + parseInt(num2);
  
//     // Send the result as a response
//     response.send(`The sum is: ${sum}`);
//   });
  
