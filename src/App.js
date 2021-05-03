import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import Pokemon from "./pages/Pokemon";

const App = () => {
    const [income, setIncome] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);

    useEffect(() => {
        let temp = 1000;
        for (let i = 0; i < income.length; i++) {
            temp += parseInt(income[i].price);
        }
        setTotalIncome(temp);
    }, [income]);

    return (
        <div className="App">
            {/* <Header totalIncome={totalIncome} /> */}
            {/* <IncomeForm income={income} setIncome={setIncome} /> */}
            {/* <IncomeList income={income} setIncome={setIncome} /> */}
            <Pokemon/>
        </div>
    );
};

export default App;
