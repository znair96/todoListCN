const Task = require('../models/tasks');
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
