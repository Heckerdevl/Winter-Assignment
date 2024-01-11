const express= require('express');
const path = require('path');
const app= express();


app.use(express.static(path.join(__dirname,'public')));


app.get('/', function(req, res) {
    res.type('text/html')
    res.sendFile(path.join(__dirname, '../Frontend','signin.html'));
  });



app.listen(80 , ()=>{
    console.log("the application is started")
})