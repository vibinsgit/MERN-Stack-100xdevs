function countIt() {
    const currentValue = document.getElementById("button1").innerHTML;
    console.log(currentValue.split(" "));
    const currentCounter = currentValue.split(" ")[1];
    const newCounter = parseInt(currentCounter) + 1;
    document.getElementById("button1").innerHTML = "Counter " + newCounter;
}