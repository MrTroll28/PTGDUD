import React from "react";
import NoResults from "../components/Center/NoResults";
import Filters from "./Center/Filters";
import "../css/Center.css";

const Center = () => {
    const searchQuery = "cakescascsa";
    const suggestedTags = ["Sweet Cake", "Black Cake", "Pozole Verde", "Healthy food"];

    return (
        <div className="main-container">
            <Filters />
            <NoResults searchQuery={searchQuery} tags={suggestedTags} />
        </div>
    );
};

export default Center;
