import React from "react";
import CheckoutItem from "/CheckoutItem";
import { CartContext } from "../context/CartContext";

const CheckoutList = () => {
    return (
        <div className="checkout-list">
            <CheckoutItem/>
        </div>
    )
}

export default CheckoutList;