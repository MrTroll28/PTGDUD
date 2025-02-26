import React from "react";
import { GoInbox } from "react-icons/go";


const UserMenu = () => {
    return (
        <div className="user-menu">
            <button className="recipe-box-btn">
                <GoInbox className="user-icon"/> Your Recipe Box
            </button>
            <img className="user-avatar" src="https://i.pravatar.cc/40" alt="User Avatar" />
        </div>
    );
};

export default UserMenu;
