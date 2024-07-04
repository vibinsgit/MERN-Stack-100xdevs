//week2.6  map, filter, arrow functions

//arrow functions
function sum1(a, b) {
    return a + b;
}
const sum2 = (a, b) =>{
    return a + b;
}

// app.get('/', function(req, res){

// });
// app.get('/', (req, res) =>{

// });

const ans = sum2(1, 2);
console.log(ans);

//problem , input : [1, 2, 3, 4, 5], output : [2, 4, 6, 8, 10]

const input = [1, 2, 3, 4, 5];

const newArray = [];
for(let i = 0; i < input.length; i++){
    newArray.push(input[i] * 2);
}
console.log("Done by ordinary function : ", newArray);

//map function
function transform(i){
    return i * 3;
}

const ans2 = input.map(transform);
const ans3 = input.map(function (i){
    return i * 4;
});

console.log("Done by map function : ", ans2);
console.log("Done by map function : ", ans3);

//filter function 

const arr1 = [1, 2, 3, 4, 5, 6];
let newArr = [];

for(let i = 0; i < arr1.length; i++){
    if(arr1[i] % 2 == 0){
        newArr.push(arr1[i]);
    }
}

console.log( "Simple Filter function : ", newArr);

function filterLogic(n){
    if(n % 2 == 0){
        return true;
    }else {
        return false;
    }
}

const ans5 = arr1.filter(filterLogic);
console.log("Filter example value :", ans5);
