const admin = require('firebase-admin');
admin.initializeApp();
exports.db = admin.firestore();

const { 
    addUser 
} = require('./users');

const { 
    addStudent 
} = require('./students');

exports.addUser = addUser;
exports.addStudent = addStudent;

  
