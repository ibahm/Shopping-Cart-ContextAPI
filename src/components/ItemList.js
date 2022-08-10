import React from "react";
import Item from "./Item";
import {nanoid} from "nanoid";

/**
 * Static array
 * It will not be changed as the purpose of the app is to display a cart system using the context API
 */

const stock = [
    {id: nanoid(), name: "T-Shirt", price: 30},
    {id: nanoid(), name: "Shoes", price: 120},
    {id: nanoid(), name: "Jacket", price: 80},
    {id: nanoid(), name: "Trousers", price: 50},
    {id: nanoid(), name: "Socks", price: 11.99},
    {id: nanoid(), name: "Bag", price: 35},
    {id: nanoid(), name: "Underwear", price: 9.99},
    {id: nanoid(), name: "Hat", price: 19.99},
    {id: nanoid(), name: "Luxury Bag", price: 199.99},
    {id: nanoid(), name: "Scarf", price: 5.99}
];

const ItemList = () => {
    return (
        <div className="item-list">
            {stock.map(item => (
                <Item key={item.id} name={item.name} price={item.price}/>
            ))}
        </div>
    );
}

export default ItemList;