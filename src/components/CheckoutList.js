import React, {useContext} from "react";
import CheckoutItem from "./CheckoutItem";
import { CartContext } from "../context/CartContext";

const CheckoutList = () => {
    const {cart} = useContext(CartContext);
    const prices = cart.map(item => item.price);
    const subTotal = prices.reduce((pVal, cVal) => (pVal + cVal), 0);

    return (
        <div className="checkout-cont">
            <div className="checkout-list">
                {cart.map(item => (
                    <CheckoutItem id={item.id} name={item.name} price={item.price}/>
                ))}
            </div>
            <div className="checkout-info">
                <h2>Total</h2>
                <h4>Sub-Total: £{(subTotal.toFixed(2))}</h4>
                <h4>Delivery: {subTotal >= 35 ? "FREE" : "£4.99"}</h4>
                <h3>Total: £{subTotal >= 35 ? subTotal.toFixed(2) : (subTotal + 4.99).toFixed(2)}</h3>
                <button className="checkout-button">CHECKOUT</button>
            </div>
        </div>
    )
}

export default CheckoutList;