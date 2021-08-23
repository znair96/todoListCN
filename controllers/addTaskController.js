const Task = require('../models/tasks');
module.exports.addTask = function(req,res){
    let reqBody = req.body;
    console.log(reqBody);
    if(req.body.operation == 'addtask'){
        Task.create({
            "taskDescription" : req.body.todoDescription,
            "category": req.body.category,
            "dueDate": req.body.date
        },function(err,taskLists){
            if(err){
                console.log(err);
                console.log('Problem creating in data');
                return;
            }
            return res.redirect('back');
        })
    }else{
        let deleteTask = req.body.taskCheckbox;
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

