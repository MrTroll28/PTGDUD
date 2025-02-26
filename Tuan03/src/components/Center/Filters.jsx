import React, { useState } from "react";
import FilterSection from "../../components/Center/Filters/FilterSection";
import RatingStars from "../../components/Center/Filters/RatingStar";

const Filters = () => {
    const [selectedTypes, setSelectedTypes] = useState(["Grilled", "Roasted"]);
    const [timeRange, setTimeRange] = useState([30, 50]);
    const [selectedRatings, setSelectedRatings] = useState([3, 4, 5]);

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
                <div className="time-filter">
                    <input
                        type="range"
                        min="10"
                        max="120"
                        value={timeRange[0]}
                        onChange={(e) => setTimeRange([Number(e.target.value), timeRange[1]])}
                    />
                    <input
                        type="range"
                        min="10"
                        max="120"
                        value={timeRange[1]}
                        onChange={(e) => setTimeRange([timeRange[0], Number(e.target.value)])}
                    />
                    <p>{timeRange[0]} minutes - {timeRange[1]} minutes</p>
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
