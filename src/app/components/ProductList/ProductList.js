import React from "react";
import Products from "./Products";

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

function ProductList() {
    return (
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <ul className="shadow">
              <Products
                id={products[0].id}
                name={products[0].name}
                description={products[0].desc}
                isAvailable={products[0].isAvailable}
                price={products[0].price}
                image={products[0].image}
              />
              <Products
                id={products[1].id}
                name={products[1].name}
                description={products[1].desc}
                isAvailable={products[1].isAvailable}
                price={products[1].price}
                image={products[1].image}
              />
              <Products
                id={products[2].id}
                name={products[2].name}
                description={products[2].desc}
                isAvailable={products[2].isAvailable}
                price={products[2].price}
                image={products[2].image}
              />
              <Products
                id={products[3].id}
                name={products[3].name}
                description={products[3].desc}
                isAvailable={products[3].isAvailable}
                price={products[3].price}
                image={products[3].image}
              />
            </ul>
          </div>
        </div>
      );
}

export default ProductList;