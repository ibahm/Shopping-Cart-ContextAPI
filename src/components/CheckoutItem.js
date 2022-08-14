import React, { useContext } from "react";
import {MdClose} from "react-icons/md";
import { CartContext } from "../context/CartContext";

const CheckoutItem = ({id, name, price}) => {
    const {DeleteFromCart} = useContext(CartContext);

    const handleDete = () => {
        DeleteFromCart(id);
    }

    return (
        <div className="checkout-item">
            <div className="checkout-footer">
                <span>{name}</span>
                <span>£{price}</span>
                <MdClose className="deletebtn" onClick={handleDete}/>
            </div>
        </div>
    )
}

export default CheckoutItem;