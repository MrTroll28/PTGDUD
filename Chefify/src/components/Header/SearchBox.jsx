import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
    return (
        <div className="flex items-center rounded-lg w-[300px] bg-gray-100 px-4 py-2">
            <FiSearch className="text-lg" />
            <input type="text" placeholder="What would you like to cook?" className="bg-transparent outline-none w-full text-base"/>
        </div>
    );
};

export default SearchBox;
