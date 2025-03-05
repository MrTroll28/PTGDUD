import React, { useState } from "react";
import FilterSection from "../../components/Center/Filters/FilterSection";
import RatingStars from "../../components/Center/Filters/RatingStar";
import Slider from '@mui/material/Slider';

const Filters = () => {
    const [selectedTypes, setSelectedTypes] = useState(["Grilled", "Roasted"]);
    const [value, setValue] = useState([20, 40]);
    const [selectedRatings, setSelectedRatings] = useState([3, 4, 5]);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const valuetext = (value) => {
        return `${value} min`;
    };

    return (
        <div className="filters">
            <h3 className="filters-title">☰ FILTERS</h3>

            {/* Bộ lọc loại món ăn */}
            <FilterSection title="Type">
                <div className="filter-options">
                    {["Pan-fried", "Stir-fried", "Grilled", "Roasted", "Sauteed", "Baked", "Steamed", "Stewed"].map(
                        (type) => (
                            <label key={type} className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={selectedTypes.includes(type)}
                                    onChange={() =>
                                        setSelectedTypes((prev) =>
                                            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
                                        )
                                    }
                                />
                                {type}
                            </label>
                        )
                    )}
                </div>
            </FilterSection>

            {/* Bộ lọc thời gian */}
            <FilterSection title="Time">
                <Slider
                    getAriaLabel={() => 'Time range'}
                    value={value}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={0}
                    max={60}
                />
                <div className="time-range">
                    <span>{value[0]} min</span>
                    <span>{value[1]} min</span>
                </div>
            </FilterSection>

            {/* Bộ lọc đánh giá sao */}
            <FilterSection title="Rating">
                <RatingStars selectedRatings={selectedRatings} setSelectedRatings={setSelectedRatings} />
            </FilterSection>

            <button className="apply-btn">Apply</button>
        </div>
    );
};

export default Filters;
