import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res) {
          const json = await res.json();
          const data = json.todos; //data is in the format of - arrays of object 
          setTodos(data);
      })
      .catch(error => {
        console.log("Error ", error);
      });
    }, 10000);  
  }, []);
  return <div>
      {todos.map(todo => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
  </div>
}

function Todo({ title, description }) {
  return <div>
    <h1> { title }</h1>
    <h2>{ description } </h2>
  </div>
}

export default App
