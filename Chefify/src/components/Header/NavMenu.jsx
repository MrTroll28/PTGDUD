import React, { useState, useEffect } from "react";

const NavMenu = () => {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://67c81790c19eb8753e7c341f.mockapi.io/Menu")
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            }, []);
    });
    
    return (
        <nav className="flex gap-5">
            {items.map((item, index) => (
                <a key={index} href="#" className="text-gray-600 hover:text-pink-500 transition">
                    {item.item}
                </a>
            ))}
        </nav>
    );
};

export default NavMenu;
