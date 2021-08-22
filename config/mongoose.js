const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/taskDb");

const db = mongoose.connection;

db.on('error',console.error.bind('console','Unable to establish connection'));

db.once('open',function(){
     console.log("Mongo DB connected successfuly");
})

