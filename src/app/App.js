import React, { useState } from "react";
import "../../src/index.css";
import ProductList from "./components/ProductList/ProductList";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import FilterProduct from "./components/FilterProduct/FilterProduct";

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
  let [filterText, updateFilterText] = useState("all");

  let filteredProductList = newProductList.filter((product) => {
      if(filterText === 'available') {
        return product.isAvailable === true;
      }else if(filterText === 'unavailable') { 
        return product.isAvailable === false;
       } else {
        return product;
       }
  }) 

  function createProduct(product) {
    product.id = newProductList.length + 1;
    setNewProductList([product, ...newProductList]);
  }

  function onFilterValueSelected(filterValue) {
    updateFilterText(filterValue);   
  }

  return (
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <CreateProduct createProduct={createProduct} />
        <FilterProduct filterValueSelected={onFilterValueSelected} />
        <ProductList newProductList={filteredProductList} />
      </div>
    </div>
  );
}

export default App;
