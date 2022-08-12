import React, {createContext, useState} from "react";

export const CartContext = createContext();

/**
 * CartContext State
 * We do not need to create an initial Cart array as the state will hold the item objects for us with useState hook
 * Using useState, we can create a function that updates the state and pass the cart through the provider to it's children.
 */

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