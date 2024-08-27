//V4 - useEffect explained with dependency array
import { useState,useEffect } from "react";
import axios from "axios";

function App() {
    const [selectId, setSelectId] = useState(1);

    return <div>
        <button onClick={function() {
            setSelectId(1);
        }}>1</button>
        <button onClick={function() {
            setSelectId(2);
        }}>2</button>
        <button onClick={function() {
            setSelectId(3);
        }}>3</button>
        <button onClick={function() {
            setSelectId(4);
        }}>4</button>
        <button onClick={function() {
            setSelectId(5);
        }}>5</button>

        <Todo id={selectId} />
    </div>
}

function Todo({ id }) {
    const [todo, setTodos] = useState([]);
    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
        //axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            .then(function(res) {
            console.log(res.data.todo);
            setTodos(res.data.todo);
            });
    }, [id]);
    return <div>
        Id : {id}
        <h1>{ todo.title }</h1>
        <h2>{ todo.description }</h2>
    </div>
}

export default App