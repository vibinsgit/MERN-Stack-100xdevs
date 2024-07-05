//Week3.2 - (V3.1) - basic mongoDB workout

const express = require("express");
const mongoose = require("mongoose");
const PORT = 3000;

const app = express();
app.use(express.json());

//mongoose.connect("mongodb+srv://vibins:vibins@cluster0.yyqreuu.mongodb.net/<DATABASE_NAME>");
mongoose.connect("mongodb+srv://vibins:vibins@cluster0.yyqreuu.mongodb.net/userDB");

//const User = mongoose.model('<TABLE_NAME>', {name: String,age : Number, email: String, password: String});
const Userschema = mongoose.model('Users', {
    name: String,
    age : Number,
    email: String,
    password: String
});

app.post("/signup", async function(req, res){
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const password = req.body.password;

    //to check if user is already exists or not
    const existingUser = await Userschema.findOne({ email: email });
    if(existingUser){
        return res.status(400).send("Email already exists");
    }

    const newUserData = new User({
        name: name,
        age: age,
        email: email,
        password: password 
    });

    await newUserData.save();

    res.json({
        msg: "User created successfully"
    });
});

app.listen(PORT, () =>{
    console.log("App is running on ", PORT);
});


