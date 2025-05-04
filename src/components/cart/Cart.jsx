import React from "react";
import freeDelivery from "../../assets/fri-frakt.png";
import "./Cart.css";
import { useMenuStore } from "../../data/store";

function Cart() {
  const { cartList } = useMenuStore();

  console.log(cartList);

  return (
    <main className="cart-page">
      <div className="checkout-offers">
        <p>Fri frakt över 699:-</p>
        <img src={freeDelivery} alt="" />
        <p>Hemleverans till dörren</p>
      </div>

      <button>Fortsätt handla</button>

      <h1>Din varukorg</h1>

      <section className="cart">{cartList.map((toy) => {})}</section>
    </main>
  );
}

export default Cart;
