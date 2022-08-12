import React, {useContext} from "react";
import CheckoutItem from "./CheckoutItem";
import { CartContext } from "../context/CartContext";

const CheckoutList = () => {
    const {cart} = useContext(CartContext);

    return (
        <div className="checkout-list">
            {cart.map(item => (
                <CheckoutItem id={item.id} name={item.name} price={item.price}/>
            ))}
        </div>
    )
}

export default CheckoutList;