const express = require('express');
const { studentsCreateRoute } = require('./admin/StudentCreateRoute');
const { readStudentRoute } = require('./admin/studentReadRoute');
const { updateStudentRoute } = require('./admin/studentsUpdateRoute');
const { deleteStudentRoute } = require('./admin/studentsDeleteRoute');
const app = express();
require('dotenv').config();
app.use(express.json());

app.use('/api',studentsCreateRoute);
app.use('/api',readStudentRoute);
app.use('/api',updateStudentRoute);
app.use('/api',deleteStudentRoute);

    
    
    



let port = process.env.PORT
app.listen(port,()=>{ 
    console.log(`server on run ${port}`)
})