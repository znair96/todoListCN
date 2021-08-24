const Task = require('../models/tasks');
module.exports.taskAction = function(req,res){
    let reqBody = req.body;
    console.log(reqBody);
    //Checks the task operation which has to be performed
    if(req.body.operation == 'addtask'){
        //Handling the code for add task operation
        Task.create({
            "taskDescription" : req.body.todoDescription,
            "category": req.body.category,
            "dueDate": req.body.date
        },function(err,taskLists){
            if(err){
                console.log(err);
                console.log('Problem creating in data');
                return res.redirect('/');
            }
            return res.redirect('back');
        })
    }else{
        //Handling the code for delete task operation
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

