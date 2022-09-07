import React from "react";
import Item from "./Item";
import {nanoid} from "nanoid";

/*  
 *  STATIC ARRAY
 *  It will not be changed as the purpose of the app is to display a cart system using the context API for educational purposes.
 *  Future plans to implement stock through context api.
 */

const stock = [
    {id: "", name: "T-Shirt", price: 30},
    {id: "", name: "Shoes", price: 120},
    {id: "", name: "Jacket", price: 80},
    {id: "", name: "Trousers", price: 50},
    {id: "", name: "Black Socks", price: 11.99},
    {id: "", name: "Bag", price: 35},
    {id: "", name: "Underwear", price: 9.99},
    {id: "", name: "Hat", price: 19.99},
    {id: "", name: "Luxury Bag", price: 199.99},
    {id: "", name: "Scarf", price: 5.99},
    {id: "", name: "Gloves", price: 9.99},
    {id: "", name: "Sun Glasses", price: 29.99},
    {id: "", name: "Long Silver Chain", price: 29.99},
    {id: "", name: "Baseball Cap", price: 19.99},
    {id: "", name: "Gold Ring", price: 40},
    {id: "", name: "White Socks Multipack", price: 21.99},
    {id: "", name: "White Shirt", price: 25.99},
    {id: "", name: "Black Headband", price: 15.99},
    {id: "", name: "Grey Socks", price: 11.99},
    {id: "", name: "Gold Necklace", price: 35.99},
    {id: "", name: "Multipack Gloves", price: 22.99},
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