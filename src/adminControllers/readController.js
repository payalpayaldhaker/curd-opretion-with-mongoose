const { Student } = require("../models/studentModel")

let readStudentController =(req,res)=>{ 
    //database
    //db.collection.find()
    //node express
    //Model.find();
    Student.find()
    .then((data)=>{ 
        res.status(200).json({ 
            "mgs":'studdent read opretion sucessfully',
            data:data
            
        })
    })
    .catch(()=>{ 
        res.status(403).json({ 
            "mgs":'not read'
        })
    })
    
    
    
}
exports.readStudentController = readStudentController