//week2.5

const express = require("express");
const app = express();
const port = 3000;

function calculateSum(n){
    let ans = 0;
    for(let i = 0; i <= n; i++){
        ans = ans + i;
    }
    return ans;
}

app.get('/', function (req, res){
res.send("I am ready.");
});

app.get('/sum', function (req, res){  // localhost:3000/sum/?n=10
    const n = req.query.n; 
    const sum = calculateSum(n);
    res.send(sum.toString());
});



app.listen(port, function (){
    console.log(`Port is running on ${port}`);
});
