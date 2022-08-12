import React from "react";
import {FiHome} from "react-icons/fi";
import { Link } from "react-router-dom";
import CheckoutList from "../components/CheckoutList";

const Checkout = () => {
    return (
        <>
           <div className="nav-bar">
                <h1>My Cart</h1>
                    <Link to="/">
                        <FiHome/>
                    </Link>
            </div>
            <div className="checkout-container">
                <CheckoutList/>
            </div>
        </>
    )
}

export default Checkout;