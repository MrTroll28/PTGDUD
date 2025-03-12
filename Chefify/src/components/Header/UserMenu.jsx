import React from "react";
import { GoInbox } from "react-icons/go";


const UserMenu = () => {
    return (
        <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-pink-100 text-pink-500 px-3 py-2 rounded-full text-sm hover:bg-pink-300">
                <GoInbox className="text-lg text-pink"/> Your Recipe Box
            </button>
            <img className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/40" alt="User Avatar" />
        </div>
    );
};

export default UserMenu;
