import React from "react";
// import NoResults from "../components/Center/NoResults";
import Filters from "./Center/Filters";
import ListItem from "./Items/ListItem";

const Center = () => {
    const searchQuery = "cakescascsa";
    const suggestedTags = ["Sweet Cake", "Black Cake", "Pozole Verde", "Healthy food"];

    return (
        <div className="flex justify-start items-start flex-col pt-[40px] max-w-[1200px] mx-auto">
            <Filters />
            {/* <NoResults searchQuery={searchQuery} tags={suggestedTags} /> */}
            <ListItem />
        </div>
    );
};

export default Center;
