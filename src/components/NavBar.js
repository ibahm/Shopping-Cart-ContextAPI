import React, {useContext} from "react";
import {FiShoppingCart} from "react-icons/fi";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
    return(
        <div className="nav-bar">
            <h1>Shopping Cart</h1>
            <div className="nav-bar-cart">
                <FiShoppingCart className="nav-cartbtn"/>
                <span>0</span>
            </div>
        </div>
    );
}

export default NavBar;