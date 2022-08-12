import React, { useContext } from "react";
import {FiHome} from "react-icons/fi";
import { Link } from "react-router-dom";

const Checkout = () => {
    return (
        <>
           <div className="nav-bar">
                <h1>Checkout</h1>
                    <Link to="/">
                        <FiHome/>
                    </Link>
            </div>
        </>
    )
}

export default Checkout;