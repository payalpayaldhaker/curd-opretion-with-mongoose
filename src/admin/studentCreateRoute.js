const express = require('express');
const { studentsCreateController } = require('../adminControllers/creatContoller');
const studentsCreateRoute = express.Router();

studentsCreateRoute.get('/students',studentsCreateController);
module.exports = {studentsCreateRoute}
    
    


