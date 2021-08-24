const mongoose = require('mongoose');
// Creating the schema for task db
const taskSchema = new mongoose.Schema({
     taskDescription:{
         type:String,
         required:true
     },
     category:{
         type:String
     },
     dueDate:{
         type:Date
     }


},{
    timestamps:true
});

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;