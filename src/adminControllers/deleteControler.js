const { Student } = require("../models/studentModel")

let deleteStudentController =(req,res)=>{ 
    //database
    //db.collection.find()
    //node express
    //Model.find();
    //console.log(req.params.studentId )
    if(req.params.studentId !== undefined){
        Student.deleteOne({
        id:req.params.studentId 
        })
        .then((data)=>{ 
            res.status(200).json({ 
                "mgs":'studdent delete opretion sucessfully',
                 data:data
                
            })
        })
        .catch((error)=>{ 
            res.status(403).json({ 
                "mgs":'not delete',
                error:error
            })
        })
    }
    else{ 
        res.status(403).json({ 
            "mgs":'students id required'
        })
    }
   
    
    
    
}
exports.deleteStudentController = deleteStudentController