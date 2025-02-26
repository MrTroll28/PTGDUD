import React from "react";

const NavMenu = () => {
    const menuItems = ["What to cook", "Recipes", "Ingredients", "Occasions", "About Us"];
    
    return (
        <nav className="nav-menu">
            {menuItems.map((item, index) => (
                <a key={index} href="#">{item}</a>
            ))}
        </nav>
    );
};

export default NavMenu;
