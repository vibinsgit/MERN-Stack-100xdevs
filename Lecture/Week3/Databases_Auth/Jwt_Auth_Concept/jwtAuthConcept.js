//week3.2 (2) - JWT(Json Web Token)

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const Port = 3000;

const app = express();
app.use(express.json());

const allUsers = [
{
    username : "blackbuster123@gmail.com",
    password : "12345",
    name : "black"
},{
    username : "vibins123@gmail.com",
    password : "123",
    name : "vibins"
},{
    username : "singh321@gmail.com",
    password : "123321",
    name : "singh"
}];

function userExists(username, password){

    return allUsers.find(user => user.username === username && user.password === password) !== undefined; 

    /*for(let i = 0; i < allUsers.length; i++){
        if(username === allUsers[i].username && password === allUsers[i].password){
            return true;
        }
    }
    return false; */
}

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User does not exist in memory DB"
        });
    }
    // creating token with jwt using sign() function
    let token = jwt.sign({username : username}, jwtPassword);
    return res.json({
        token
    });
});

app.get("/users", function(req, res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        res.json({
            users : allUsers.filter(function (value){
                if(value.username === username){
                    return false;
                }else{
                    return true;
                }
            })
        });
        //return a list of users other than this username
    }catch(err){
        return res.status(403).json({
            msg: "Invalid token"
        });
    }
});

app.listen(Port, ()=>{
    console.log("Port is running on ", Port);
});