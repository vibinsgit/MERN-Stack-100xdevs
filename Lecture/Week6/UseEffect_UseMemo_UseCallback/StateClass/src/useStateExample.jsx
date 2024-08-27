//V1 - Explained about useState
import { useState } from "react"

function App() {
    const [count, setCount] = useState(0);
    function touched() {
        setCount(count + 1);
    }
    return <div>
        <button onClick={touched}>Click { count }</button>
    </div>
}

export default App
