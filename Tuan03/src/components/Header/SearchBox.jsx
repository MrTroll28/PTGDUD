import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
    return (
        <div className="search-box">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="What would you like to cook?" />
        </div>
    );
};

export default SearchBox;
