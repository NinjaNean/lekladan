import React from "react";
import freeDelivery from "../../assets/fri-frakt.png";
import "./Cart.css";
import { useMenuStore } from "../../data/store";

function Cart() {
  const { cartList, addToCart, removeFromCart } = useMenuStore();

  return (
    <main className="cart-page">
      <div className="checkout-offers">
        <p>Fri frakt över 699:-</p>
        <img src={freeDelivery} alt="" />
        <p>Hemleverans till dörren</p>
      </div>

      <button>Fortsätt handla</button>

      <h1>Din varukorg</h1>

      <section className="cart">
        {cartList.map((toy) => (
          <div key={toy.id} className="cart-product">
            <img src={toy.img} alt="product img" />

            <div>
              <h1>{toy.name}</h1>
              <p>{toy.price * toy.quantity}</p>
            </div>

            <div className="cart-buttons">
              <button disabled={toy.quantity === 1} onClick={() => removeFromCart(toy)}>
                -
              </button>
              <p>{toy.quantity}</p>
              <button onClick={() => addToCart(toy)}>+</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Cart;
