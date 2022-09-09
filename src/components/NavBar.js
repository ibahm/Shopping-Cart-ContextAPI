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
                <a href="/"><button class="clothbtn">All Clothing</button></a>
            <div className="dropdown">
                <button class="clothbtn">Sale</button>
                <div class="dropdown-content">
                    <a href="#">Tops Sale</a>
                    <a href="#">Trousers Sale</a>
                    <a href="#">Shoes Sale</a>
                    <a href="#">Accessories Sale</a>
                </div>
            </div>
            <div className="dropdown">
                <button class="clothbtn">Tops</button>
                <div class="dropdown-content">
                    <a href="#">T-Shirts</a>
                    <a href="#">Hoodies</a>
                    <a href="#">Jackets</a>
                </div>
            </div>
            <div className="dropdown">
                <button class="clothbtn">Bottoms</button>
                <div class="dropdown-content">
                    <a href="#">Denim</a>
                    <a href="#">Joggers</a>
                    <a href="#">Shorts</a>
                </div>
            </div>
            <div className="dropdown">
                <button class="clothbtn">Shoes</button>
                <div class="dropdown-content">
                    <a href="#">Trainers</a>
                    <a href="#">Smart Shoes</a>
                    <a href="#">Boots</a>
                </div>
            </div>
            <div className="dropdown">
                <button class="clothbtn">Accessories</button>
                <div class="dropdown-content">
                    <a href="#">Jewellery</a>
                    <a href="#">Bags</a>
                    <a href="#">Socks</a>
                    <a href="#">Hats & Scarfs</a>
                </div>
            </div>      
            <Link to="./checkout" className="nav-link"><div className="nav-bar-cart">
                <FiShoppingCart className="nav-cartbtn"/>
                <span className="cart-quantity">{total}</span>
            </div></Link>
        </div>
    );
}

export default NavBar;