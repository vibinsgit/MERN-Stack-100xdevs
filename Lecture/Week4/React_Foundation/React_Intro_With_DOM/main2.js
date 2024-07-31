//Week4.2 - React Foundation (v2)

let globalId = 1;

function markAsDone(todoId){
    const parent = document.getElementById(todoId);
    parent.children[2].innerHTML = "Done!";
}

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

function addTodo(){

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const parent = document.getElementById("container");

    parent.appendChild(createChild(title, description, globalId++));
}