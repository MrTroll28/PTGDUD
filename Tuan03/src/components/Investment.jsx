import React, { useState } from "react";

const Investment = () => {
    const [money, setMoney] = useState(100);
    const [rate, setRate] = useState(10);
    const [goal, setGoal] = useState(150);
    const [results, setResults] = useState([]);

    const calculateInvestment = () => {
        let year = new Date().getFullYear();
        let currentMoney = parseFloat(money);
        let investmentResults = [];

        while (currentMoney < goal) {
            let endYearMoney = currentMoney + (currentMoney * rate / 100);
            investmentResults.push({
                year: year,
                money: Math.round(currentMoney),
                rate: rate,
                endYear: Math.round(endYearMoney),
            });
            currentMoney = endYearMoney;
            year++;
        }

        setResults(investmentResults);
    };

    return (
        <div>
            <h2>Investment Calculator</h2>
            <input type="number" value={money} onChange={(e) => setMoney(e.target.value)} placeholder="Input Your Invest Money"/>
            <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="Input Rate (%)"/>
            <input type="number" value={goal} onChange={(e) => setGoal(e.target.value)}/>
            <button onClick={calculateInvestment}>Calculate</button>

            {results.length > 0 && (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Money</th>
                            <th>Rate</th>
                            <th>End Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((row, index) => (
                            <tr key={index}>
                                <td>{row.year}</td>
                                <td>{row.money}</td>
                                <td>{row.rate}%</td>
                                <td>{row.endYear}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Investment;
