//V7 - Explained Custom Hooks

import { useEffect, useState } from "react"

//custom hooks made by ourself
function useTodos() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch("https://sum-server.100xdevs.com/todos")
            .then(async (res) => {
                const json = await res.json();
                setTodos(json.todos);
            })
    }, []);
    return todos;
}

function App() {

    const todos = useTodos();

    return <div>
        {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
}

function Todo({ title, description }) {
    return <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
    </div>
}

export default App
