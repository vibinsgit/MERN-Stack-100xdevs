//Week2.1 - Revision of Promises & Async in Js

//callback
function square(n){
    return n * n;
}

function cube(n){
    return n * n * n;
}

function sumOfSomething(a, b, fn){
    let value1 = fn(a);
    let value2 = fn(b);
    return value1 + value2;
}

let result = sumOfSomething(5, 5, square);
console.log("Sum of something :", result);

//async function call
console.log("I am before async function.");
function onDone(){
    console.log("Hello i am from onDone.");
}
setTimeout(onDone, 2000); //calling async function
console.log("I am after async function.");

let sum = 0;
for(let i = 0; i < 10; i++){
    sum += i;
}
console.log("The sum value is", sum);


const fs = require("fs");

fs.readFile("file.txt", "utf-8", function (err, data){
console.log(err);
console.log(data);
});

console.log("I am after readfile.");

//Promises

//Approch1(By Callback)
function myOwnDuration(fn, duration){
    setTimeout(function (){
        fn();
    }, duration);
}

myOwnDuration(function (){
    console.log("Hello i am from myowndurayion.");
}, 5000);

//Approch2 (By promise)

function myNewPromise(duration){
    const p = new Promise(function (resolve){
        setTimeout(function (){
            resolve();
        }, duration);
    });
    return p;
}

myNewPromise(1000).then(function (){
    console.log("I am from my new promise.");
});


function addSum(resolve){
    let a = 0;
    for(let i = 0; i < 10; i++){
        a = a + i;
    }
    resolve(a);
}

const pro = new Promise(addSum);
pro.then(function(value){
    console.log("The pro value is", value);
});

function sum1(a, b){
    return new Promise(function (resolve){
        resolve(a + b);
    });
}

sum1().then(function (ans){
    console.log(ans);
});