// function myData() {
//     console.log("Hello Vibins from 1");
//     setTimeout(() => {
//         console.log("Hello Vibins from 2.");
//     }, 3000);
//     console.log("Hello Vibins from 3.");
// }

// myData();

setTimeout(() => {
    console.log("I am first Timeout function.");
}, 3000);

let sum = 0;
for(let i = 0; i < 100000000; i++) {
    sum = i + sum;
}

console.log(sum);