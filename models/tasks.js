const mongoose = require('mongoose');

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