import React from "react";
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <div className="container">
      <NavBar/>
      <ItemList/>
    </div>
  );
}
export default App;
