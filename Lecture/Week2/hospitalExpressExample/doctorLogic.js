//week2.5
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const users = [{
    name : "Arun",
    kidneys : [{
        healthy : false
    }]
}];

//Task : To find the total number of kidneys, number of healthy kidneys, number of Unhealthy kidneys
app.get('/', function(req, res){

    const arunKidneys = users[0].kidneys; //returns kidney array 
    console.log("Return arun kidney array : " , arunKidneys);

    const numberOfKidneys = arunKidneys.length;
    console.log("Total number of kidneys : ", numberOfKidneys);

    let numberOfHealthyKidneys = 0;
    for(let i = 0; i < arunKidneys.length; i++){
        if(arunKidneys[i].healthy){
        numberOfHealthyKidneys += 1;
        }
    }
    console.log("Number of healthy kidneys :", numberOfHealthyKidneys);

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    console.log("Number of Unhealthy Kidneys :", numberOfUnhealthyKidneys);

    res.json({
        'No of Kidneys' : numberOfKidneys,
        'No of Healthy Kidneys' : numberOfHealthyKidneys,
        'No of Unhealthy Kidneys' : numberOfUnhealthyKidneys,
    });
});

//Task : To add the additional kidneys
app.post('/', function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    });
    res.json({
        msg : "kidney added."
    })
});


//Task : To change all kidneys value into true
app.put('/', function(req, res){
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg : "All kidneys set to healthy"
    });
});

//Task : To return only good kidneys

function checkUnhealthyKidneys() {
    let UnhealthyKidney = false;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            UnhealthyKidney = true;
            break;
        }
    }
    return UnhealthyKidney;
}
app.delete('/', function(req, res){
    if(checkUnhealthyKidneys()){
    const newKidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy : true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.status(200).json({
        msg : "done"
    });
    } else{
        res.status(411).json({
            msg : "You have no bad kidneys"
        });
    }
});

app.listen(port, function (){
    console.log("Server is running on ", port);
});

/*200 - ok
404 - Not found
403 - Forbidden
500 - Internal Server Error
511 - Network Authentication Required
*/

