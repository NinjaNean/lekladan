import React from "react";
import "./Cart.css";
import { useMenuStore } from "../../data/store";
import { NavLink } from "react-router";

function Cart() {
  const { cartList, addToCart, removeFromCart } = useMenuStore();

  return (
    <main className="cart-page">
      {cartList ? (
        <div className="empty-cart">
          <p>Din varukorg är tom. Hitta några fantastiska leksaker först!</p>
          <NavLink className="button" to={"/products"}>
            Gå till produkterna
          </NavLink>
        </div>
      ) : (
        <>
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
        </>
      )}
    </main>
  );
}

export default Cart;
