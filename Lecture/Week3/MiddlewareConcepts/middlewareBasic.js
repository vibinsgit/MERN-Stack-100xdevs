//week3.1 (1)- Middlewares
//Dumb way of writing code

const express = require("express");

const app = express();
const port = 3000;

app.get("/health-checkup", function(req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    console.log(username);
    console.log(password);
    console.log(kidneyId);


    if(username != "admin" || password != "admin"){
        res.status(400).json({
            "msg" : "Inputs are invalid in user & pass validation."
        });
        return ;
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            "msg" : "Inputs are invalid in kidney validation."
        });
        return ;
    }

    res.json({
        "msg" : "Your inputs are valid."
    });


});

app.listen(port, function (){
    console.log("App is running on", port);
});

