import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="filter-section">
            <div className="filter-header" onClick={() => setIsOpen(!isOpen)}>
                <h4>{title}</h4>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isOpen && <div className="filter-content">{children}</div>}
        </div>
    );
};

export default FilterSection;
