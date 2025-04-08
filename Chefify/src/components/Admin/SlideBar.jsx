import React, { useState } from "react";
import logo from "../../assets/Lab_05/Image 1858.png";
import Square from "../../assets/Lab_05/Squares four 1.png";
import Folder from "../../assets/Lab_05/Folder.png";
import Groups from "../../assets/Lab_05/Groups.png";
import Analytics from "../../assets/Lab_05/Pie chart.png";
import Messages from "../../assets/Lab_05/Chat.png";
import Integrations from "../../assets/Lab_05/Code.png";

const menuItems = [
    { name: "Dashboard", icon: Square },
    { name: "Projects", icon: Folder },
    { name: "Teams", icon: Groups },
    { name: "Analytics", icon: Analytics },
    { name: "Messages", icon: Messages },
    { name: "Integrations", icon: Integrations },
];

const SlideBar = () => {
    const [activeItem, setActiveItem] = useState("Dashboard");

    return (
        <aside className="col-span-2 p-4 border-r border-gray-100">
            <img src={logo} alt="Logo" />
            <nav className="mt-4">
                <ul>
                    {menuItems.map(({ name, icon }) => (
                        <li
                            key={name}
                            onClick={() => setActiveItem(name)}
                            className={`flex items-center gap-4 p-2 cursor-pointer 
                                hover:bg-pink-500 hover:text-white hover:rounded 
                                ${activeItem === name ? "bg-pink-500 text-white rounded" : ""}`}
                        >
                            <img src={icon} alt={name} />
                            {name}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default SlideBar;
