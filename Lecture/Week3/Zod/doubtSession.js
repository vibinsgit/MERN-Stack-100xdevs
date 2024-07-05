const express = require("express");

const app = express();

const middelwares = [login-checkup, kidney-chechup, heart-checkup, health-checkup];

app.get("/", ...middelwares, function(req, res){ //getting multiple middelewares
    console.log("Welcome compained middelware.");
});

app.listen(3000);