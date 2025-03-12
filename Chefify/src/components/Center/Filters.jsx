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
        <div className="w-[280px] px-[20px] py-[10px] bg-white shadow-md rounded-md">
            <h3 className="text-lg font-bold rounded-lg drop-shadow-lg">☰ FILTERS</h3>

            {/* Bộ lọc loại món ăn */}
            <FilterSection title="Type">
                <div className="grid grid-cols-2 gap-2">
                    {["Pan-fried", "Stir-fried", "Grilled", "Roasted", "Sauteed", "Baked", "Steamed", "Stewed"].map(
                        (type) => (
                            <label key={type} className="flex items-center gap-[8px]">
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
                <div className="flex justify-between mt-[5px] px-[40px]">
                    <span>{value[0]} min</span>
                    <span>{value[1]} min</span>
                </div>
            </FilterSection>

            {/* Bộ lọc đánh giá sao */}
            <FilterSection title="Rating">
                <RatingStars selectedRatings={selectedRatings} setSelectedRatings={setSelectedRatings} />
            </FilterSection>

            <button className="w-full bg-pink-500 text-white py-2 px-4 border-none rounded-md text-lg cursor-pointer mt-4 transition duration-300 hover:bg-pink-600">
                Apply
            </button>
        </div>
    );
};

export default Filters;
