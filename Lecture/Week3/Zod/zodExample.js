//week3.1 (4)- Zod

const express = require("express");
const zod = require("zod");
const app = express();

const PORT = 3000;
const schema = zod.array(zod.number()); //describing the structure of array input with number data type

//create a schema :
/*{
    email : string,
    password : string,
    country : "IN" or "US"
}*/

const myScheme = zod.object({
    email : zod.string(),
    password : zod.string(),
    country : zod.literal("IN").or(zod.literal("US"))
});

function validateInput(obj){ //creating schema within function

    const mySchema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8)
    });

    return mySchema.safeParse(obj);
}

app.use(express.json());

app.post("/zod-validation", function(req, res){

    const kidneys = req.body.kidneys; //kidneys = [1, 2]
    const response = schema.safeParse(kidneys);

    if(!response.success){ //success - > return true or false
        res.status(411).json({
            msg: "Input is invalid."
    });
    }else{
        res.send({
            response
        });
    }
    
});

app.post("/zod-object-verify", function(req, res){

    const details = req.body.details;
    const response = myScheme.safeParse(details);

    if(!response.success){
        res.status(411).json({
            msg: "Input is invalid."
    });
    }else{
        res.send({
            response
        });
    }
});

app.post("/login", function(req, res){
    const response = validateInput(req.body);
    if(!response.success){
        res.json({
        msg : "Inputs are invalid"
        });
    }else{
        res.json({
            msg : "Inputs are valid."
        });
    }
});

app.listen(PORT, function(){
    console.log("App is running on ", PORT);
});