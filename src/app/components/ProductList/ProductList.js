import React from "react";
import Products from "./Products";


function ProductList(props) {
  console.log("newProduct: ", props.newProductList);
  
    return (
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <ul className="shadow">
              {
              props.newProductList.map((product) => {
                return (
                  <Products
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.desc}
                    isAvailable={product.isAvailable}
                    price={product.price}
                    image={product.image}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      );
}

export default ProductList;