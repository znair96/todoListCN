const Task = require('../models/tasks');

module.exports.deleteTasks = function(req,res){
     let deleteTask = req.body.taskCheckbox;
     if(req.body.operation == 'deleteTask'){
        Task.deleteMany({
            _id:{
                $in : deleteTask
            }
        },function(err){
            if(err){
                console.log(err);
            }else{
                 return res.redirect('/');
            }
        })
     }
     
}