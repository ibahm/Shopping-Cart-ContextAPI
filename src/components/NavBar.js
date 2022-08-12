import React, {useContext} from "react";
import {FiShoppingCart} from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const NavBar = () => {
    // Call the cart state and store the length of it in a variable
    const {cart} = useContext(CartContext);
    const total = cart.length;

    return(
        <div className="nav-bar">
            <h1>Shopping Cart</h1>
            <Link to="./Pages/Checkout"><div className="nav-bar-cart">
                <FiShoppingCart className="nav-cartbtn"/>
                <span>{total}</span>
            </div></Link>
        </div>
    );
}

export default NavBar;