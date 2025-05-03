import React, { useState } from "react";
import "./product.css";

function Product({ toy }) {
  const [discount, setDiscount] = useState(toy.discount);

  function addDiscount() {
    const result = (100 - discount) / 100;
    return Math.trunc(toy.price * result);
  }

  function addToCart() {}

  return (
    <div className="toy" key={toy.id}>
      {discount > 0 && <p className="discount">{discount}%</p>}
      <img src={toy.img} alt="" />
      <h1>{toy.name}</h1>
      <p>{toy.description}</p>
      <div className="toy-flex">
        <button onClick={() => addToCart()}>Lägg till</button>
        <div>
          {discount > 0 && <p className="old-price">{toy.price}:-</p>}
          <p>{addDiscount()}:-</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
