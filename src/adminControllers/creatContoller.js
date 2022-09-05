const { Student } = require("../models/studentModel");

let studentsCreateController =(req,res)=>{ 
    console.log(req.query);
    if(req.query.surname !== undefined){
        let studentObject = new Student(req.query);
    studentObject.save()
    .then(()=>{ 
        res.status(201).json({ 
            mgs:"students create succesfulllt",
            studentData:studentObject
        })
    })
    .catch(()=>{ 
        res.status(403).json({ 
            mgs:"students not created"
        })
    })
    }
    else{
        res.status(403).json({ 
            mgs:"query required"
        })
    }
    
    
    
}
exports.studentsCreateController = studentsCreateController