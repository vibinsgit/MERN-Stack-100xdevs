const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", function(req, res){
    res.send("Hello World.");
});

app.get("/interest", function(req, res){
    const principal = parseFloat(req.query.principal);
    const time = parseFloat(req.query.time);
    const rate = parseFloat(req.query.rate);

    if(isNaN(principal) || isNaN(time) || isNaN(rate)){
        res.status(400).send("Invalid inputs");
        return;
    }

    const interest = (principal * time * rate) / 100;
    console.log(interest);
    res.send(interest.toString());
});

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});

//http://localhost:3000/interest?principal=1000&time=5&rate=25