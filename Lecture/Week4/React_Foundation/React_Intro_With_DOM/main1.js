//Week4.2 - React Foundation (v1)

function addTodo(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const parentDiv = document.createElement("div");
    parentDiv.innerHTML = title;
    document.getElementById("container").appendChild(parentDiv);
    
    /*const originalHtml = document.getElementById("container").innerHTML;
    document.getElementById("container").innerHTML = originalHtml + `<div>
            <div>${title}</div>
            <div>${description}</div>
            <button>Mark as done</button>
        </div>` */
}