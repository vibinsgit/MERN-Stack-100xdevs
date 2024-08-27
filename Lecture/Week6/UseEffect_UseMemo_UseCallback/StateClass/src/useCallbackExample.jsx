//V6 - usecallback example

import { useState, memo, useCallback } from "react";

function App() {

    const [counter, setCounter] =useState(0);

    function sampleChild() {
        console.log("Sample child clicked.");
    }

    //Using callback to minimize the render
    const inputFunction = useCallback(() => {
        console.log("I am from usecallback.");
    }, []);

    return ( 
        <div>
            <Child functionClick={sampleChild} />
            <CallBackMe passMe={inputFunction} />
            <button onClick={ () => {
                setCounter(counter + 1);
            }}>Counter ({counter})</button>
        </div>
    );
}

    const Child = memo( ({functioClick}) => {

        console.log("child clicked.");

        return <div>
            <button onClick={functioClick}>Button Clicked</button>
        </div>
    });

    const CallBackMe = memo( ({passMe}) => {

        console.log("callback clicked.");

        return <div>
            <button onClick={passMe}>Button Clicked</button>
        </div>
    });


export default App;