import React, {useContext} from "react";
import {FiShoppingCart} from "react-icons/fi";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
    // Call the cart state and store the length of it in a variable
    const {cart} = useContext(CartContext);
    const total = cart.length;

    return(
        <div className="nav-bar">
            <h1>Shopping Cart</h1>
            <div className="nav-bar-cart">
                <FiShoppingCart className="nav-cartbtn"/>
                <span>{total}</span>
            </div>
        </div>
    );
}

export default NavBar;