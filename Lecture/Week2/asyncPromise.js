//Week2.1 - Revision of Promises & Async in Js

//callback
console.log("Callback Example :");
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

//async 
console.log("I am before async function.");
function onDone(){
    console.log("Hello i am from onDone.");
}
setTimeout(onDone, 2000);
console.log("I am after async function.");
let sum = 0;
for(let i = 0; i < 10; i++){
    sum += i;
}
console.log("The sum value is", sum);

//41 : 00