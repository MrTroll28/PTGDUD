import React, { useState } from "react";

const CongTruNhanChia = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [operator, setOperator] = useState("+");
    const [result, setResult] = useState(null);

    const handleOnChangeA = (event) => {
        setA(Number(event.target.value));
    }

    const handleOnChangeB = (event) => {
        setB(Number(event.target.value));
    }

    const handleClick = () => {
        let res;
        switch (operator) {
            case "+":
                res = a + b;
                break;
            case "-":
                res = a - b;
                break;
            case "*":
                res = a * b;
                break;
            case "/":
                res = b !== 0 ? a / b : "Cannot divide by zero";
                break;
            default:
                res = "Invalid operation";
        }
        setResult(res);
    }

    const handleRadioChange = (event) => {
        setOperator(event.target.value);
    }

    return (
        <div>
            <input placeholder="input a" 
                type="number"
                onChange={handleOnChangeA} />
            <br />
            <input placeholder="input b" 
                type="number" 
                onChange={handleOnChangeB}/>
            <br />
            <input type="radio" onChange={handleRadioChange} name="group" value="+" defaultChecked />+
            <input type="radio" onChange={handleRadioChange} name="group" value="-" />-
            <input type="radio" onChange={handleRadioChange} name="group" value="*" />*
            <input type="radio" onChange={handleRadioChange} name="group" value="/" />/
            
            <button onClick={handleClick}>Submit</button>
            <br />
            <span>Result: {result}</span>
        </div>
    );
}

export default CongTruNhanChia;