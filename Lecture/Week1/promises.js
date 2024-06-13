//Week 1.5 -> async function, sync function, promises, callback

function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
      ans += i;
    }
    return ans;
}
  
function findSumTill100() {
    console.log(findSum(100));
}

setTimeout(findSumTill100, 10000) //calling an async function
console.log("hello world");

//Promise() :
const fs = require("fs"); //file system library

fs.readFile("file.txt", "utf-8", function(err, data){
    console.log(data);
});

function hello(){ //own async function
    return new Promise(function(resolve){
        fs.readFile("file1.txt", "utf-8", function(err, data){
            resolve(data);
        });
    })
}

function done(data){ //callback function to call
    console.log(data);
}

hello().then(done);

//Async await
function vibinsFile(){
    let p = new Promise(function(resolve){
        resolve("Hello Vibins");
    });
    return p;
}

async function main(){
    let value = await vibinsFile();
    console.log(value);
    console.log("Hello I am from main() function.");
}

main();



