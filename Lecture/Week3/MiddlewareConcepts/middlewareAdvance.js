//week3.1 (2)- Middlewares

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(calculateRequest);

let numberOfRequest = 0;
function calculateRequest(req, res, next){
    numberOfRequest++;
    console.log("Total number of request :", numberOfRequest)
    next();
}

function userMiddelware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    console.log("Username is", username);
    console.log("Password is", password);

    if(username !== "vibins" || password !== "express"){
        res.json({
            "msg" : "Your username and password are incorrect."
        });
    }else{
        next();
    }
}

function kidneyMiddelware(req, res, next){

    const kidneyId = parseInt(req.query.kidneyId, 10);
    console.log("Number of kidneys :", kidneyId);
    if(kidneyId !== 1 && kidneyId !== 2){
        res.status(400).json({
            "msg" : "Wrong inputs in kidney field."
        });
    }else{
        next();
    }
}

app.get("/welcome", function(req, res){
    res.json({
        "msg" : "welcome you."
    });
});

app.get("/login-checkup", userMiddelware, function(req, res){

        res.status(200).send("Authentication is successful.");
});

app.get("/health-checkup", userMiddelware, kidneyMiddelware,function(req, res){
    //Do Logic
    res.status(200).send("Your health is good.");
});

app.listen(PORT, function (){
    console.log("The app is running on", PORT);
});