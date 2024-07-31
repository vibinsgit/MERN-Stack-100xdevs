//Week4.2 - React Foundation (v4)
//Why React ?

    let globalId = 1;
    let todoState = [];
    let oldTodoState = [];

    function addTodo() {
      // big function we wrote in the beginning
    }

    function removeTodo(todo) {
      const element = document.getElementById(todo.id);
      element.parent.removeChild(element);
    }

    function updateTodo(oldTodo, newTodo) {
      const element = document.getElementById(oldTodo.id);
      element.children[0].innerHTML = newTodo.title;
      element.children[1].innerHTML = newTodo.description;
      element.children[2].innerHTML = newTodo.completed ? "Mark as done" : "Done";
    }

    function updateState(newTodos) {
      // calculate the diff b/w newTodos and oldTodos.
      // More specifically, find out what todos are - 
      // 1. added
      // 2. deleted
      // 3. updated
      const added = [];
      const deleted = [];
      const updated = [];
      // calculate these 3 arrays
      // call addTodo, removeTodo, updateTodo functions on each of the
      // elements
      oldTodoState = newTodos;
    }

    function addTodo() {
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      todoState.push({
        title: title,
        description: description,
        id: globalId++,
      })
      updateState(todoState);
    }