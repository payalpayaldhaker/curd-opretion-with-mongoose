const express = require('express');
const { deleteStudentController } = require('../adminControllers/deleteControler');

const deleteStudentRoute = express.Router();

deleteStudentRoute.delete('/delete/:studentId',deleteStudentController);
module.exports = {deleteStudentRoute}
    
    


