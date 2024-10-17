import React from "react";
import "../../src/index.css";
import ProductList from "./components/ProductList/ProductList";
import CreateProduct from "./components/CreateProduct/CreateProduct";

function App() {
   return (
   <div>
    <CreateProduct />
    <ProductList />
   </div>
   )
}

export default App;
