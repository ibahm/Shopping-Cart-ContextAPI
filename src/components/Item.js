import React from "react";
import { FiPlus } from "react-icons/fi";

const Item = () => {
    return (
        <div className="item">
            <span>Image</span>
            <div className="item-footer">
                <span className="item-price">£15</span>
                <FiPlus/>
            </div>
        </div>
    );
}

export default Item;