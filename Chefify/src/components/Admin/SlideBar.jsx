import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Lab_05/Image 1858.png";
import Square from "../../assets/Lab_05/Squares four 1.png";
import Folder from "../../assets/Lab_05/Folder.png";
import Groups from "../../assets/Lab_05/Groups.png";
import Analytics from "../../assets/Lab_05/Pie chart.png";
import Messages from "../../assets/Lab_05/Chat.png";
import Integrations from "../../assets/Lab_05/Code.png";

const menuItems = [
    { name: "Dashboard", icon: Square, link: "/" },
    { name: "Projects", icon: Folder, link: "/project" },
    { name: "Settings", icon: Square, link: "/settings" },
    { name: "Profile", icon: Groups, link: "/profile" },
    { name: "Analytics", icon: Analytics, link: "/analytics" },
    { name: "Messages", icon: Messages, link: "/messages" },
    { name: "Integrations", icon: Integrations, link: "/integrations" },
];

const SlideBar = () => {
    const [activeItem, setActiveItem] = useState("Dashboard");

    return (
        <aside className="col-span-2 p-4 border-r border-gray-100">
            <img src={logo} alt="Logo" />
            <nav className="mt-4">
                <ul>
                    {menuItems.map(({ name, icon, link }) => (
                        <li key={name} className="mb-2">
                            <Link to={link} onClick={() => setActiveItem(name)}
                              className={`flex items-center gap-4 p-2 hover:bg-pink-500 hover:text-white hover:rounded 
                              ${activeItem === name ? "bg-pink-500 text-white rounded" : ""}`}
                            >
                              <img src={icon} alt={name} />
                              {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default SlideBar;