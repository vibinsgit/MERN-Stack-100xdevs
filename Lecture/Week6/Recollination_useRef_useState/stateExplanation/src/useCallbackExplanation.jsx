//V5 - useCallback Explanation

import { useState, useEffect, useMemo, memo, useCallback } from "react";

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

    const calculateTotalreturns = useCallback(function() {
        return exchangeData1.returns + exchangeData2.returns;
    }, [exchangeData1, exchangeData2]);

    return (
        <div>
            <ReturnsChild callMyOwnFun ={calculateTotalreturns} />
        </div>
    );
}

const ReturnsChild = memo(function({callMyOwnFun}) {
    console.log("Returns chils logged");
    const finalReturn = callMyOwnFun();
    return (
        <div>
            Your final returns are {finalReturn}
        </div>
    );
});

export default App;