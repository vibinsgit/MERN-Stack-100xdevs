import { useState } from 'react'

let counter = 4;

function App() {

  const[todos, setTodos] = useState([{
    id: 1,
    title: "Gym",
    description: "workout 4hrs"
  },{
    id: 2,
    title: "Play",
    description: "play 4hrs"
  },{
    id: 3,
    title: "Eat",
    description: "eat 1hrs"
  }]);

  function addTodo() {
    setTodos([...todos, {
      id: counter++,
      title: "Random todo added",
      description: "Sample todo is added"
    }]);

    //otherway

    // const newTodo = [];
    // for(let i = 0; i < todos.length; i++) {
    //   newTodo.push(todos[i]);
    // }
    // newTodo.push({
    //   id: 4,
    //   title: "NewTodo Array",
    //   description: "I am from new todo array"
    // });
    // setTodos(newTodo);
  }

  return (
  <div>
    <button onClick={addTodo}>Add new Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  </div>
  );
}

function Todo({title, description}) {
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}

export default App
