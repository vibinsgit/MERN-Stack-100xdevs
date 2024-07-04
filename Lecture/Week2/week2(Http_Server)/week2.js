//week2.2
//ECMAScript - https://tc39.es/ecma262/#sec-numbers-and-dates
//JavaScript 
//node.js (backend) - runtime 
//bun - it faster - https://github.com/oven-sh/bun

//HTTP Server

//creating HTTP server
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', function (req, res){
    res.send("Hello vibins");
});

app.get('/person-details', function (req, res){
    res.json({
        name : "vibins",
        age : 22,
        gender : "male"
    });
});

app.get('/conversations1', function (req, res){
    res.send('<b>Hi vibins</b>');
});

app.post('/conversations2', function (req, res){
    //console.log(req.headers["authorization"]); 
    //getting value from header by postman
    console.log("Authorization : ", req.headers.authorization);
    console.log(req.body);
    res.send({
        msg : "2 + 2 = 4"
    });
});

app.post('/query-operation', function (req, res){
    const message = req.query.message; //getting value from search box
    console.log("Query passed value is", message);
})

app.listen(port, function (){
    console.log(`Port is running on ${port}`);
});

 
