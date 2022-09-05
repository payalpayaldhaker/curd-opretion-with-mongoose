const express = require('express');
const { readStudentController } = require('../adminControllers/readController');
const readStudentRoute = express.Router();

readStudentRoute.get('/readstudent',readStudentController);
module.exports = {readStudentRoute}
    
    


