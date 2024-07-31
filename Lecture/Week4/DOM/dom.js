//week4.1 - Introduction (2)

function calculateSum() {
    const a = document.getElementById("firstNumber").value;
    const b = document.getElementById("secondNumber").value;
    //const element = document.getElementById("finalSum");
    fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
        .then(function(response) {
            console.log(response);
            response.text()
                .then(function(ans) {
                    console.log(ans);
                    document.getElementById("finalSum").innerHTML = ans;
                })
        })
    //element.innerHTML = "The sum is " + (parseInt(a) + parseInt(b));
}

//async function

async function calculateSum1() {
    const a = document.getElementById("firstNumber").value;
    const b = document.getElementById("secondNumber").value;

    const response = await fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b);
    const ans = await response.text();
    document.getElementById("finalSum").innerHTML = ans;
}

//Debouncing

let timeout;

function Debouncing() {
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        calculateSum1();
    }, 100);
}