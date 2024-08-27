//V5 - Good solution
import {useEffect, useMemo, useState} from "react";

function App() {

    const [counter, setCounter] = useState(0);
    const [inputValue, setInputvalue] = useState(1);

    //useEffect method
    //const [count, setCount] = useState(0);
    // useEffect(() => {
    //     let finalCount = 0;
    //     for(let i = 1; i <= inputValue; i++) {
    //         finalCount = finalCount + i;
    //     }
    //     setCount(finalCount);
    // }, [inputValue]);

    let count = useMemo( () => {
        let count = 0;
        for(let i = 0; i <= inputValue; i++) {
            count = count + i;
        }
        return count;
    }, [inputValue]);

    return <div>
        <input type="text" placeholder="1 to n" onChange={ (e) => {
            setInputvalue(e.target.value);
        }}/> 
        <br />
        Sum from 1 to {inputValue} is {count}
        <br />
        <button onClick={() => {
            setCounter(counter + 1);
        }}>
            Counter ({counter})
        </button>
    </div>
}

export default App