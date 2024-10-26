import React from "react";
import ProductDetails from "./ProductDetails";

function Products(props) {
  console.log("Porducts component executed!");

  return (
    <li class="list-group-item" style={{backgroundColor: props.isAvailable ? "white" : "#dedede"}}>
      <div class="media align-items-lg-center flex-col flex-lg-row p-3 d-flex">
        <div class="media-body order-2 order-lg-1">
          <h4 class="mt-0 font-weigth-bold mb-2">{props.name}</h4>
          <p class="font-italic text-muted mb-0 small">{props.description}</p>
          <ProductDetails price={props.price} isAvailable={props.isAvailable} />
        </div>
        <img
          src={props.image}
          alt="Generatic placeholder"
          width="200"
          class="m1-lg-5 order-1"
        />
      </div>
    </li>
  );
}

export default Products;
