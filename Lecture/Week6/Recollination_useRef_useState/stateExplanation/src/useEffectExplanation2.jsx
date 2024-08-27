//V3 - useeffect explanation with proper implementation

import { useState, useEffect } from "react"

function App() {

    const [exchangeData, setExchangeData] = useState({});
    const [bankData, setBankData] = useState({});
    console.log("Re-render");

    useEffect(() => {
        // fetch("www.vibins.com", async (res) => {
        // const json = await res.json();
        // setBankData(json); //Assume it is { income: 100 }
        // });
        setBankData({income: 1000});
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setExchangeData({
                returns: 100
            }, 1000);
        });
    }, []);

    const incomeTax = (bankData.income + exchangeData.returns) * 0.3;
    return (
        <div>
            Hello, your income is {incomeTax}
        </div>
    );
}

export default App;