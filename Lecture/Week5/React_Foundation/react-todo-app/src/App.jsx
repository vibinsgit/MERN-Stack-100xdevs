import { useState } from 'react'

//Todo Application

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to Gym",
    description: "1 Am to 2 AM",
    completed: false
  },{
    title: "Learn Dsa",
    description: "5 Am to 7 AM",
    completed: false
  }]);

  function addTodos(){
    setTodos([...todos, {
      title: "New Todo",
      description: "Desc of new todo"
    }]);
  }

  return (
    <div>
      <button onClick={addTodos}>Add new Todo</button>
        {todos.map(function(todos){
          return <Todo title={todos.title} description={todos.description}></Todo>
        })}
    </div>
  )
}

//component
function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
