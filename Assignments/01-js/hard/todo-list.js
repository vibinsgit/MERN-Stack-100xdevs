/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor(){
      this.toDoList = [];
    }

    add(todo){
      this.toDoList.push(todo);
    }

    remove(index){
      if (index < 0 || index >= this.toDoList.length) {
        return;
      }
      this.toDoList.splice(index, 1);
    }

    update(index, todo){
      if (index < 0 || index >= this.toDoList.length) {
        return;
      }
      this.toDoList[index] = todo;
    }

    getAll(){
      return this.toDoList;
    }

    get(index){
      if (index < 0 || index >= this.toDoList.length) {
        return null;
      }
        return this.toDoList[index];
    }

    clear(){
       this.toDoList = [];
    }
}


module.exports = Todo;
