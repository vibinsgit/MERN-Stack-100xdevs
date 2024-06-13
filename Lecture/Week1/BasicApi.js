//Week1.3 - Basic JS API's

//length
function getLength(str){
    console.log("Orginal String : ", str);
    console.log("String Length : ", str.length);
}

getLength("Hello World");

//indexOf()
function findIndexOf(str, target){
    console.log("Orginal String : ", str);
    console.log("Index : ", str.indexOf(target));
}

findIndexOf("Hello World", "World");

//lastIndexOf()
function findLastIndexOf(str, target){
    console.log("Orginal String : ", str);
    console.log("Index : ", str.lastIndexOf(target));
}

findLastIndexOf("Hello World World World", "World");

//slice()
function getSlice(str, start, end){
    console.log("Before slice : ", str);
    console.log("After slice : ", str.slice(start, end));
}

getSlice("Hellohello", 0, 5);

//replace()
let str = "Hello Vibins";
console.log(str.replace("Vibins", "JavaScript"));

//split()
let value = "hi my name is vibins";
const word = value.split(" ");
console.log(word);

//trim()
let value1 = "    HelloTrim    ";
console.log(value1.trim());

//Upper & Lower case 
let value2 = "small letter";
console.log(value2.toUpperCase());
let value3 = "BIG LETTER";
console.log(value3.toLowerCase());

//parseInt
console.log(parseInt("42"));
console.log(parseInt("42px"));
console.log(parseInt("3.14"));

//parseFloat
console.log(parseFloat("47"));
console.log(parseFloat("47.55"));
console.log(parseFloat("47px"));

//ArrayConcepts

//push()
const array = [1, 2, 3, 4];
array.push(2);
console.log(array);

//pop()
array.pop();
console.log(array);

//shift()
array.shift();
console.log(array);

//unshift
array.unshift(0);
console.log(array);

//concetination
const firstArray = [1, 2, 3, 4];
const secondArray = [6, 7, 8, 9];
console.log(firstArray.concat(secondArray));

//forEach()

function logValue(str){
    console.log(str);
}

firstArray.forEach(logValue);

//callback 

function log1(){
    console.log("Hello Log 1.");
}
function log2(){
    console.log("Hello Log 2.");
}

function callLog(fn){
    fn();
}

callLog(log2);

//classes

class Animals{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType(){
        console.log("I am belong to animal type");
    }
    speak(){
        console.log(this.name + " is speaks like " + this.speaks);
    }
}

let dog = new Animals("Doggy", 4, "Bow bow"); //creating an object
let cat = new Animals("Catty", 4, "Meow meow");

Animals.myType(); // calling static function
dog.speak();// call a function on object
cat.speak();

//Date class

const currentDate = new Date(); //Date is predefined class

console.log("Current date is " , currentDate);
console.log("Present date is ", currentDate.getDate());
console.log("The hour is ", currentDate.getHours());
console.log("The minutes is ", currentDate.getMinutes());
console.log("The seconds is ", currentDate.getSeconds());
console.log("Present Year is", currentDate.getFullYear());

//setting a year
currentDate.setFullYear(2022);
console.log("After the set full year ", currentDate);

//JSON (JavaScript Object Notation) - JSON.parse, JSON.stringify

//JSON.parse
const users = '{"name" : "Vibins", "age" : 22, "gender" : "male"}';
const user1 = JSON.parse(users);
console.log(user1["age"]);
console.log(user1["name"]);
console.log(user1.gender); //console.log(user1["gender"]); both are same

//JSON.stringify
const userObject ={
    name : "vibins",
    age : 23,
    gender : "male"
};

const user2 = JSON.stringify(userObject);
console.log(user2);

//Math function
console.log(Math.random());
console.log(Math.floor(2.44));
console.log(Math.ceil(2.44));
console.log(Math.max(2.44, 12, 55));
console.log(Math.min(2.44, 12, 55));
let valuee = 7;
console.log(Math.pow(valuee, 2));

//objects

const sampleObjects = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3"
}

function objectMethods(obj){
    console.log("Orginal object : ", obj);
    let keys = Object.keys(obj); //Object is class & Keys() is static function
    console.log("After Object.keys() : ", keys);
    let values = Object.values(obj);
    console.log("After Object.values() : ", values);
    let entries = Object.entries(obj);
    console.log("After Object.entries() : ", entries);
}

objectMethods(sampleObjects);

//hasOwnProperty()
let obj1 ={
    name : "vibins",
    age : 23,
    rollNo : 502047
}

console.log(obj1.hasOwnProperty("age"));

//assign()
let newObj = Object.assign({}, obj1, {newProperty : "newValue"});
console.log("After new Object.assign(): ", newObj);