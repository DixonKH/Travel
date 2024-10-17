import React, { useState } from "react";
import Button from "./Button.js";

function ProductDetails(props) {
  console.log("Product Details component executed!");

  let badgeClass = "badge-margin-240 badge ";
  badgeClass += props.isAvailable ? "bg-success" : "bg-danger";

  let [productCount, updateCount] = useState(0);

  function formatterProductCount() {
    return productCount > 0 ? productCount : "Zero";
  }

  let decrementCount = function () {
    updateCount(--productCount);
  };

  let incrementCount = function () {
    updateCount(++productCount);
  };

  return (
    <div class="d-flex align-items-center mt-1">
      <h6 class="font-weight-bold my-2" style={{ marginRight: 30 }}>
        ${props.price}
      </h6>
      <Button eventHandler={decrementCount}>-</Button>
      <span style={{ padding: "0px 20px" }}>{formatterProductCount()}</span>
      <Button eventHandler={incrementCount}>+</Button>
      <span className={badgeClass}>
        {props.isAvailable ? "Available" : "Unavailable"}
      </span>
    </div>
  );
}

export default ProductDetails;
