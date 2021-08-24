const Task = require('../models/tasks');
//controller for handling the index page 
module.exports.todoPage = function(req,res){
    Task.find({},function(err,taskList){
        if(err){
            console.log(err);
        }
        return res.render('todo',{
            "taskList" : taskList 
        });
    }
    )
    
}
