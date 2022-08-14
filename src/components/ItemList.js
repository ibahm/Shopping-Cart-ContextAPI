import React from "react";
import Item from "./Item";
import {nanoid} from "nanoid";

/*  
 *  STATIC ARRAY
 *  It will not be changed as the purpose of the app is to display a cart system using the context API for educational purposes.
 *  Future plans to implement stock through context api.
 */

const stock = [
    {id: nanoid(), name: "T-Shirt", price: 30},
    {id: nanoid(), name: "Shoes", price: 120},
    {id: nanoid(), name: "Jacket", price: 80},
    {id: nanoid(), name: "Trousers", price: 50},
    {id: nanoid(), name: "Black Socks", price: 11.99},
    {id: nanoid(), name: "Bag", price: 35},
    {id: nanoid(), name: "Underwear", price: 9.99},
    {id: nanoid(), name: "Hat", price: 19.99},
    {id: nanoid(), name: "Luxury Bag", price: 199.99},
    {id: nanoid(), name: "Scarf", price: 5.99},
    {id: nanoid(), name: "Gloves", price: 9.99},
    {id: nanoid(), name: "Sun Glasses", price: 29.99},
    {id: nanoid(), name: "Long Silver Chain", price: 29.99},
    {id: nanoid(), name: "Baseball Cap", price: 19.99},
    {id: nanoid(), name: "Gold Ring", price: 40},
    {id: nanoid(), name: "White Socks Multipack", price: 21.99},
    {id: nanoid(), name: "White Shirt", price: 25.99},
    {id: nanoid(), name: "Black Headband", price: 15.99},
    {id: nanoid(), name: "Grey Socks", price: 11.99},
    {id: nanoid(), name: "Gold Necklace", price: 35.99},
    {id: nanoid(), name: "Multipack Gloves", price: 22.99},
];

const ItemList = () => {
    return (
        <div className="item-cont">
            <div className="item-list">
                {stock.map(item => (
                    <Item id={item.id} name={item.name} price={item.price}/>
                ))}
            </div>
        </div>
    );
}

export default ItemList;