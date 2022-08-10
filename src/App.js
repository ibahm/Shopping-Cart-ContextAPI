import React from "react";
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <div className="container">
      <CartProvider>
        <NavBar/>
        <ItemList/>
      </CartProvider>
    </div>
  );
}
export default App;
