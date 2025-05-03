import React from "react";
import freeDelivery from "../assets/fri-frakt.png";

function Cart() {
  return (
    <main>
      <div className="checkout-offers">
        <p>Fri frakt över 699:-</p>
        <img src={freeDelivery} alt="" />
        <p>Hemleverans till dörren</p>
      </div>

      <button>Fortsätt handla</button>

      <h1>Din varukorg</h1>

      <section className="cart"></section>
    </main>
  );
}

export default Cart;
