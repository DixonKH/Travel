import React, { useState } from "react";
import "../../src/index.css";
import ProductList from "./components/ProductList/ProductList";
import CreateProduct from "./components/CreateProduct/CreateProduct";

const products = [
  {
    id: 1,
    name: "Madagaskar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing el, Lorem ipsum dolor sit amet, consectetur adipiscing el",
    price: 120,
    isAvailable: true,
    image: "/images/borabora.jpg",
  },
  {
    id: 2,
    name: "Gavai",
    desc: "Lorem Ipsum, Lorem  dolor sit amet, consectetur adipiscing el, Lorem ipsum dolor sit amet, consectetur adipiscing el",
    price: 140,
    isAvailable: true,
    image: "images/keywest.jpg",
  },
  {
    id: 3,
    name: "Morris",
    desc: "Lorem Ipsum, Lorem  dolor sit amet, consectetur adipiscing el, Lorem ipsum dolor sit amet, consectetur adipiscing el",
    price: 150,
    isAvailable: false,
    image: "images/maldives.jpg",
  },
  {
    id: 4,
    name: "Helson",
    desc: "Lorem Ipsum, Lorem  dolor sit amet, consectetur adipiscing el, Lorem ipsum dolor sit amet, consectetur adipiscing el",
    price: 160,
    isAvailable: true,
    image: "images/maldives2.jpg",
  },
];


function App() {
  const [newProductList, setNewProductList] = useState(products); 

  function createProduct(product) {
    setNewProductList([product, ...newProductList]);  
    console.log("app product: ", product);
  }
   return (
   <div>
    <CreateProduct createProduct={createProduct} />
    <ProductList newProductList={newProductList} />
   </div>
   )
}

export default App;
