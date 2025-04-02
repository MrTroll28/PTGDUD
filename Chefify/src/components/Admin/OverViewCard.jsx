import React from 'react';
import Button1509 from "../../assets/Lab_05/Button 1509.png";
import Button1529 from "../../assets/Lab_05/Button 1529.png";
import Button1530 from "../../assets/Lab_05/Button 1530.png";

const buttonImages = {
    "Button1509": Button1509,
    "Button1529": Button1529,
    "Button1530": Button1530,
};

const OverViewCard = ({ title, amount, change, isIncrese, color, buttonValue }) => {
    const buttonImg = buttonImages[buttonValue] || null;

    return (
        <div className="p-4 border rounded-lg shadow" style={{ backgroundColor: color }}>
        <div className="flex items-center justify-between mb-4">
            <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-2xl font-semibold">{amount}</p>
            </div>
            <button className='hover:scale-105' onClick={() => alert("đã ấn vào")}>{buttonImg && <img src={buttonImg} alt="button icon" className="w-10 h-10" />}</button>
        </div>
        <div>
            <p className={`text-sm ${isIncrese ? "text-green-500" : "text-red-500"}`}>
            {change} <span className="text-gray-500">period of change</span>
            </p>
        </div>
        </div>
    );
};

export default OverViewCard;
