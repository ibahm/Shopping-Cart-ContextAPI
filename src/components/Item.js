import React, {useContext} from "react";
import { FiPlus } from "react-icons/fi";
import { CartContext } from "../context/CartContext";

const Item = ({id, name, price}) => {
    const {AddToCart} = useContext(CartContext);

    // Calls the function from CartContext passing name and price as parameters
    const handleAdd = () => {
        AddToCart(id, name, price);
    }

    return (
        <div className="item">
            <span >{name}</span>
            <div className="item-footer">
                <span className="item-price">£{price}</span>
                <FiPlus className="cart-add"onClick={handleAdd}/>
            </div>
        </div>
    );
}

export default Item;