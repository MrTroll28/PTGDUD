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
        <nav className="nav-menu">
            {items.map((item, index) => (
                <a key={index} href="#">{item.item}</a>
            ))}
        </nav>
    );
};

export default NavMenu;
