const zod = require("zod");

//Array of number with atleast 1 input, return true or false
function validateInput1(arr){
    const schema = zod.array(zod.number());
    const response = schema.safeParse(arr);
    console.log(response); // output : { success: true, data: [ 1, 2, 3 ] }
}

const myarr= [1, 2, 3];
validateInput1(myarr);

function validateInput2(obj){
    const mySchema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8)
    });
    const response = mySchema.safeParse(obj);
    console.log(response);
}

const details = {
    email : "blackbuster810@gmail.com",
    password : "12345678"
};
validateInput2(details); /*output : {
                             success: true,
                             data: { email: 'blackbuster810@gmail.com', password: '12345678' }
                         }*/

