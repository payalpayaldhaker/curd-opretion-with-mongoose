const { Student } = require("../models/studentModel")

let updateStudentController =(req,res)=>{ 
    Student.updateMany(
        { name:'banwari'},
        {
            $set:{name:'madhu', surname:'dhakad',address:'neemcuh'}
        }
    ).then((data)=>{ 
        res.status(200).json({ 
            "mgs":'studdent update opretion sucessfully',
            data:data
        })
    })
    .catch(()=>{ 
        res.status(403).json({ 
            "mgs":'not update'
        })
    })
    
    
    
}
exports.updateStudentController = updateStudentController