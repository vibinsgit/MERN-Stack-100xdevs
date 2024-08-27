//V6 - useref Explanation

import { useEffect, useRef, useState } from "react";

function App() {

    const [incometax, setIncometax] = useState(2000);
    const divRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            console.log(divRef.current)
            divRef.current.innerHTML = 10;
        }, 5000);
    }, []);

    return (
        <div>Our final incomeTax is <p ref={divRef}> {incometax} </p></div>
    );
}

export default App;