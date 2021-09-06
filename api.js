var express = require('express'); // requre the express framework
var app = express();
const importData = require("./details.json");

// Endpoint to Get a list of users
app.get('/',function(req,res){
    res.send("Hello World");
})
app.get('/getUsers',(req,res)=>{
    res.send(importData);
});

// Create a server to listen at port 8080
const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})