import React from "react";
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";

const App = () => {
  return (
    <div className="container">
      <NavBar/>
      <ItemList/>
    </div>
  );
}
export default App;
