//V4 - useMemo explanation 

import { useState, useEffect, useMemo } from "react";

function App() {
    const [exchangeData1, setExchangedata1] = useState({ returns: 0 });
    const [exchangeData2, setExchangedata2] = useState({ returns: 0 });
    const [bankData, setBankData] = useState({ income: 0 });

    useEffect(() => {
        setExchangedata1({ returns: 100 });
    }, []);

    useEffect(() => {
        setExchangedata2({ returns: 100 });
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setBankData({ income: 100 });
        }, 5000);
    }, []);

    console.log("Before");

    const totalExchangeData = useMemo(() => {
        return exchangeData1.returns + exchangeData2.returns;
    }, [exchangeData1, exchangeData2]);

    const incomeTax = useMemo(() => {
        if (bankData.income === 0) return 0;
        return (totalExchangeData + bankData.income) * 0.3;
    }, [totalExchangeData, bankData]);

    console.log("After");

    return (
        <div>
            Your final incomeTax is {incomeTax}
        </div>
    );
}

export default App;