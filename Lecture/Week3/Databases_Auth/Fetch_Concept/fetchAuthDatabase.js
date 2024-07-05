//Week 3.2 (1)- Fetch, Authentication, Databases

//Fetch Concept
//Way 1 using promise
function AnimalDataPromise(){
    alert("I called Promise function.");
    fetch("https://fakerapi.it/api/v1/persons") // <- return api call from HTTP Server
        .then(function(response){               // the promise is still pending
            response.json()                     //we know, the data is json() format
              .then(function(finalData){
                console.log(finalData);
              });
        });
}

//way 2 uing async await
async function AnimalDataAsync(){
    alert("I called Async function.");
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const finalValue = await response.json();
    console.log(finalValue);
}

