//week3.1 (3)- Middlewares
//input validation with body parameter and global catches

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/input-validation", function(req, res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send("You have " + kidneyLength + " kidneys.");
});

//global catches
app.use(function(err, req, res, next){
    res.json({
        "msg" : "our server has some error."
    });
});

app.listen(PORT, function(){
    console.log("App is running on ", PORT);
});