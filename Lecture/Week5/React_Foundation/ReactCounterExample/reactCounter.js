let state = {
    count : 0
};

function onButtonPress(){
    state.count++;
    buttonComponentReRendeer();
}

function buttonComponentReRendeer() {
    document.getElementById("parentCounterDiv").innerHTML = "";
    const component = buttonComponent(state.count);
    document.getElementById("parentCounterDiv").appendChild(component);
}

function buttonComponent(count) {
    const button = document.createElement("button");
    button.innerHTML = `Count ${count}`;
    button.setAttribute("onclick", `onButtonPress()`);
    return button;
}

buttonComponentReRendeer();