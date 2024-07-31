//Week4.2 - React Foundation (v3)


function createChild(title, description, id){

    const child = document.createElement("div");

    const firstGrandchild = document.createElement("div");
    firstGrandchild.innerHTML = title;
    const secondGrandChild = document.createElement("div");
    secondGrandChild.innerHTML = description;
    const thirdGrandChild = document.createElement("button");
    thirdGrandChild.innerHTML = "Mark as Done";

    thirdGrandChild.setAttribute("onclick", `markAsDone(${id})`)

    child.appendChild(firstGrandchild);
    child.appendChild(secondGrandChild);
    child.appendChild(thirdGrandChild);

    child.setAttribute("id", id);

    return child;
}

function UpdateState(state) {
    const parent = document.getElementById("container");
    parent.innerHTML = "";
    for(let i = 0; i < state.length; i++){
        const value = createChild(state[i].title, state[i].description, state[i].id);
        parent.appendChild(value);
    }
}

UpdateState([{
    title : "Go to Gym 1",
    description : "From 1 AM to 5 AM",
    id : 1
},{
    title : "Go to Gym 2",
    description : "From 6 AM to 8 AM",
    id : 2
}]);