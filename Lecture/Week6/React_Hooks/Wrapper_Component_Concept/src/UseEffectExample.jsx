import { useEffect } from "react";

function App() {

    useEffect(function() {
        alert("Hi");
    }, []);

    return (
        <div>
            Hello, I am UseEffect Example
        </div>
    );
}

export default App