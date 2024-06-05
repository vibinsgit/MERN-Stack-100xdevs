//Week1.2

//simple primitives
// let, const
let a = 1;
a = 2;
console.log(a);
let name = "vibins";
let age = 18;
let isMarried = true;
console.log("The person name is " + name + " his age is " + age + " the maritial status is " + isMarried);
console.log("This person name is ");
console.log(name);

//if-else syntax
if(isMarried){
    console.log(name + " is married.");
}else{
    console.log(name + " is not married.");
}

//loops
let ans = 0;
for(let i = 0; i<=100; i++){
    ans =ans +i;
}
console.log("The sum of 100 is " + ans);

//1.program to greet a person with firstname & secondname
let firstName = "V";
let secondName = "vibins";
console.log("Welcome " + firstName + " , " + secondName);

//2.program to greet based on gender
male = true;
if(male){
    console.log("Your are welcome");
}else{
    console.log("Your are not welcome");
}

//3.program to count from 0 - 1000
let count = 0;
for(let i = 0; i<=1000; i++){
    count = count + i;
}
console.log(count);

//complex primitives
//Arrays, Objects

//Arrays
const arrayPersons = ["vibins","Deva","John"];
for(let i = 0; i<arrayPersons.length; i++){
    console.log(arrayPersons[i]);
}

const arrayNumbers = [1,2,3,4,5,6,7,8];
for(let i = 0; i<arrayNumbers.length; i++){
    if(arrayNumbers[i]%2 == 0){
        console.log(arrayNumbers[i]);
    }
}

//objects

const user1 = {
    firstName : "vibins",
    age : 18,
    gender : "male"
};
console.log(user1["firstName"]);
console.log(user1);

//Arrays of Objects
const allUsers = [{
    firstName : "vibins",
    age : 21,
    gender : "male"
},{
    firstName : "rennu",
    age : 25,
    gender : "female",
    metaData:
    {
        address: "Theppakulam",
        village : "Azhai"
    }
},{
    firstName : "sam",
    age : 20,
    gender : "male"
}];

for(let i = 0; i<allUsers.length;i++){
    if(allUsers[i]["gender"] == "female"){
        console.log(allUsers[i]["firstName"]);
    }
}

//functions
function sum(a, b){
    return a + b;
}

const value1 = sum(1,23);
console.log(value1);

//callbacks

//example 1
function mySum(a, b, fnToCall){
    let result = a + b;
    fnToCall(result);
}

function displayValue1(data){
    console.log("The 1st sum value is " + data)
}

function displayValue2(data){
    console.log("The 2st sum value is " + data)
}

const ans2 = mySum(11, 22, displayValue1);

//example 2
function arithmetic(a, b , op){
    if (op == "sum"){
        return a + b;
    }
    if (op == "minus"){
        return a - b;
    }
}

const value3 = arithmetic(22, 11, "minus");
console.log("The arithmetic value is " + value3);

//example 3
function arithematic(a, b, finalSum){
    const ans = finalSum(a, b);
    return ans;
}

function sum(a, b){
    return a + b;
}

const value4 = arithematic(1, 2, sum);
console.log("The final sum value is " + value4);

//setTimeout function
function greet(){
    console.log("Hello World!");
}

setTimeout(greet, 1 * 2000);

//setInterval function 
function welcome(){
    console.log("Welcome you...");
}

setInterval(welcome, 2 * 1000);

