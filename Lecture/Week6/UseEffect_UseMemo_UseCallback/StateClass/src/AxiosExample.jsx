//V3 - Explained useEffect with axios library
import { useEffect, useState } from "react"
import axios from "axios";

function App() {
    const [todos, setTodos] = useState([]);
    //using axios library
    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todos")
            .then(function(response) {
                setTodos(response.data.todos);
            })
    }, []);
    return <div>
        {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
}

function Todo({ title, description}) {
    return <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
    </div>
}

export default App