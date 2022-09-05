//const { mongoose } = require('../config/db')
const { mongoose }  = require('../config/db')
let studentSchema = new mongoose.Schema({
    name:String,
    surname:String,
    address:String
},
{
    timestamps:true
}
)
let Student = mongoose.model('allstudents',studentSchema);
module.exports = { Student }