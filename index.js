const express = require('express');

const port = 8080;

const app = express();

app.set('view engine','ejs');

app.use(express.urlencoded({ extended : true }));



app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('The server is running on port : '+port);
})
