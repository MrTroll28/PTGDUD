import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div>
            <div className="filter-header" onClick={() => setIsOpen(!isOpen)}>
                <h4>{title}</h4>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isOpen && <div>{children}</div>}
        </div>
    );
};

export default FilterSection;
