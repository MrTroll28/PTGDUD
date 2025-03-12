import React from "react";
import NoItemFound from "/NoItemFound.png";
import Tag from "./Tag";

const NoResults = ({ searchQuery, tags }) => {
    return (
        <div className="no-results">
            <h2>Sorry, no results were found for <span className="search-query">"{searchQuery}"</span></h2>
            <img src={NoItemFound} alt="NoItemFound" className="img-noItem"/>
            <p>We have all your Independence Day sweets covered.</p>
            <div className="suggested-tags">
                {tags.map((tag, index) => (
                    <Tag key={index} name={tag} />
                ))}
            </div>
        </div>
    );
};

export default NoResults;
