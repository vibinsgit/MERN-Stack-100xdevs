//V2 - Ugly and wrong way of coding

import { useState } from "react";

function App() {

    const [exchangeData, setExchangeData] = useState({});
    const [bankData, setBankData] = useState({});
    
    //Without useEffect it re-rendering limitless
    console.log("Re-render");

    // fetch("www.vibins.com", async (res) => {
    //     const json = await res.json();
    //     setBankData(json); //Assume it is { income: 100 }
    //     setBankData({income: 1000});
    // });

    setTimeout(() => {
        setBankData({income: 100});
    }, 3000);

    setTimeout(() => {
        setExchangeData({
            returns: 100
        }, 1000);
    });

    const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

    return (
        <div>
            Hello, your income is {incomeTax}
        </div>
    );
}

export default App
