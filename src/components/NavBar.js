import React, {useContext} from "react";
import {FiShoppingCart} from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const NavBar = () => {
    const {cart} = useContext(CartContext);
    const total = cart.length;

    return(
        
        <div className="nav-bar">
            <h3>Shopping Cart</h3>
            <Link to="./Pages/Checkout"><div className="nav-bar-cart">
                <FiShoppingCart className="nav-cartbtn"/>
                <span className="cart-quantity">{total}</span>
            </div></Link>
        </div>
    );
}

export default NavBar;