import { memo, useEffect, useState } from "react";

function App() {
    const [todos, setTodos] = useState([]);

    function fetch_data() {
        fetch("https://sum-server.100xdevs.com/todos")
            .then(async function(res) {
                const json = await res.json();
                const data = json.todos;
                setTodos(data);
            })
    }

    useEffect(() => {
        setInterval(() => {
            fetch_data();
        }, 5000);
    }, []);

    return (
        <WrapperTodo >
            {todos.map((todo) => (
            <Todo id={todo.id} title={todo.title} description={todo.description}></Todo>
            ))}
        </WrapperTodo>
    )
}

function WrapperTodo( { children } ) {
    return ( 
    <div style={{border: "2px solid black", margin: 10, padding: 20, backgroundColor: "blue", color: "white"}}>
    { children }
    </div>
    );
}

const Todo = memo(( { title, description } ) => {
    return (
    <div>
        <h2>{ title }</h2>
        <h3>{ description }</h3>
    </div>
    );
});

export default App;