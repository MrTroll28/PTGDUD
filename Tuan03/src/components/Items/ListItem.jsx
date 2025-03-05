import React, { useState, useEffect } from "react";
import Item from "./Item";
import "../../css/ListItem.css";

const ListItem = () => {
    // fetch data from API
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://67c81790c19eb8753e7c341f.mockapi.io/Food")
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }, []);


    return (
        <div className="list-item">
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div>
    );
};

export default ListItem;