//running sample program

//Async await
function vibinsFile(){
    let p = new Promise(function(resolve){
        setTimeout(function (){
        resolve("Hello Vibins");
        },5000);
    });
    return p;
}

async function main(){
    console.log("Hello I am from main() function above.");
    let value = await vibinsFile();
    console.log(value);
    console.log("Hello I am from main() function below.");
}

main();