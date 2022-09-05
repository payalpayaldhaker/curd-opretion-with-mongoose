const express = require('express');
const { updateStudentController } = require('../adminControllers/updateController');
const updateStudentRoute = express.Router();

updateStudentRoute.put('/update',updateStudentController);
module.exports = {updateStudentRoute}
    
    


