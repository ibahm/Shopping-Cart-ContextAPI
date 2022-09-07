import React, {createContext, useState} from "react";

export const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    // Cart to be updated with new entries
    const AddToCart = (id, name, price) => {
        setCart((pState) => [...pState, {id, name, price}]);
    };

    // Delete an object from Cart
    const DeleteFromCart = (id) => {
        setCart((pState) => pState.filter((pState) => pState.id !== id));
    }

    return (
        <CartContext.Provider value={{cart, AddToCart, DeleteFromCart}}> 
            {children}
        </CartContext.Provider>
    )
}