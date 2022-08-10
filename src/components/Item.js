import React from "react";
import { FiPlus } from "react-icons/fi";

const Item = ({name, price}) => {
    return (
        <div className="item">
            <span>{name}</span>
            <div className="item-footer">
                <span className="item-price">{price}</span>
                <FiPlus/>
            </div>
        </div>
    );
}

export default Item;