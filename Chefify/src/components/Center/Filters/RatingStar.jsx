import React from "react";

const RatingStars = ({ selectedRatings, setSelectedRatings }) => {
    return (
        <div className="flex flex-col gap-2">
            {[5, 4, 3, 2, 1].map((stars) => (
                <label key={stars} className="text-[18px]">
                    <input
                        type="checkbox"
                        checked={selectedRatings.includes(stars)}
                        onChange={() =>
                            setSelectedRatings((prev) =>
                                prev.includes(stars) ? prev.filter((r) => r !== stars) : [...prev, stars]
                            )
                        }
                    />
                    <span className="stars">{Array(stars).fill("⭐").join("")}</span>
                </label>
            ))}
        </div>
    );
};

export default RatingStars;
