import React from "react";
import Products from "./Products";


function ProductList(props) {
  console.log("newProduct: ", props.newProductList);
  //if(props.newProductList.length === 0) return <h3>No Products Available</h3>
  return props.newProductList.length === 0 ? <h3>No Products Available</h3> :  
    (
            <ul className="shadow">
              {
              props.newProductList.map((product) => {
                return (
                  <Products
                    key={product?.id}
                    id={product?.id}
                    name={product?.name}
                    description={product?.desc}
                    isAvailable={product?.isAvailable}
                    price={product?.price}
                    image={product?.image}
                  />
                );
              })}
            </ul>
      );
}

export default ProductList;