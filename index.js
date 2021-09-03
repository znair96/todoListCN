const express = require('express');

const port = 8080;

const path = require('path');
const app = express();

const db = require('./config/mongoose');


app.use(express.static(__dirname + '/assets'));

app.use(express.urlencoded({ extended : true }));

app.use('/',require('./routes/taskRoutes'));

app.set('views',path.join(__dirname,'views'));

app.set('view engine','ejs');


app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('The server is running on port : '+port);
})
