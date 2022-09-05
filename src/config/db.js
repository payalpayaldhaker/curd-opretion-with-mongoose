const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017')
.then(()=>{ 
    console.log('connected');
}).catch(()=>{ 
    console.log(' not connected');
})
exports.mongoose = mongoose