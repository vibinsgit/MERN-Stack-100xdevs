//Week1.4 - Loops, Functions, Callback

//for loop
let ans = 0;
for(let i = 0; i <= 50; i++){
    ans = ans + i;
}

console.log("for loop execution ", ans);

//function
function findSum(n){
    let ans = 0;
    for(let i = 0; i <= n; i++){
        ans = ans + i;
    }
    return ans;
}

const value = findSum(50);
console.log("function execution ", value);

//callback in worst manner
function square(n){
    return n * n;
}
function cube(n){
    return n * n * n;
}

function sumOfSquares(a, b){
    const value1 = square(a);
    const value2 = square(b);
    return value1 + value2;
}

function sumOfCube(a, b){
    const value1 = cube(a);
    const value2 = cube(b);
    return value1 + value2;
}

let finalValue = sumOfSquares(12, 78);
console.log("worst callback ", finalValue);

//callback in good way

function squareMethod(n){
    return n * n;
}

function sumOfSomething(a, b, fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

const sumValue = sumOfSomething(2, 2, squareMethod);
const sumValue1 = sumOfSomething(2, 2, function (n){ //anonymous function
    return n * n;
});

console.log("Good callback", sumValue);

