import React from "react";

const Item = ({ item }) => {
    return (
        <div className="item">
            <img className="item-img" src={item.image} alt={item.name} />
            <div className="item-info">
                <h3>{item.name}</h3>
                <button className="item-btn">Add to Cart</button>
            </div>
        </div>
    );
};

export default Item;
