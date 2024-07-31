//const response = await fetch("http://localhost:3000/interest?principal=" + principal + "&time=" + time + "&rate=" + rate);

async function calculate() {
    const principal = parseFloat(document.getElementById("principal").value);
    const time = parseFloat(document.getElementById("time").value);
    const rate = parseFloat(document.getElementById("rate").value);

    if (isNaN(principal) || isNaN(time) || isNaN(rate)) {
        alert("Please enter valid numbers.");
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/interest?principal=" + principal + "&time=" + time + "&rate=" + rate);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const ans = await response.text();
        document.getElementById("ans").innerHTML = "The interest is " + ans;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        document.getElementById("ans").innerHTML = "Error fetching the interest.";
    }
}
