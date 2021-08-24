//Allows the user to enter the current date and the date after that
let todayDate = new Date();
let dd = todayDate.getDate();
let mm = todayDate.getMonth()+1;
let yyyy = todayDate.getFullYear();
if(mm<10){
    mm = "0"+mm;
}
let currentDate = yyyy+"-"+mm+"-"+dd;
document.getElementById('dateDue').setAttribute('min',currentDate);
let taskResult = document.getElementsByClassName('taskResult');
let taskList = document.getElementsByClassName('checkList');

//Event for handling the delete task in case of no tasks or the task is not selected
document.getElementById('deleteTask').addEventListener("click",function(){
      if(taskResult.length == 0){
        alert('You are trying to delete a empty task....');
      }else{
        let result = false;
        for(let i = 0;i< taskList.length;i++){
           let id = document.getElementsByClassName('checkList')[i].id;
           result = result || document.getElementById(id).checked;
        }
        if(!result){
            alert('Select the list to delete...');
        }
      }
      
})
//Event for add task when user does not enter the task description
document.getElementById('addTask').addEventListener("click",function(){
    let description = document.getElementById('descr').value;
    if(description == ""){
        alert('To proceed further add the description of the task');
        return false;
    }
})