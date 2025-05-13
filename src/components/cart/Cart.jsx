import React from "react";
import "./Cart.css";
import { useMenuStore } from "../../data/store";
import { NavLink } from "react-router";

function Cart() {
  const { cartList, addToCart, removeFromCart } = useMenuStore();

  const totalPrice = () => {
    return cartList.reduce((sum, toy) => sum + toy.price * toy.quantity, 0);
  };
  const totalProducts = () => {
    return cartList.reduce((sum, toy) => sum + toy.quantity, 0);
  };

  return (
    <main className="cart-page">
      {cartList.length === 0 ? (
        <div className="empty-cart">
          <p>Din varukorg är tom. Hitta några fantastiska leksaker först!</p>
          <NavLink className="button" to={"/products"}>
            Gå till produkterna
          </NavLink>
        </div>
      ) : (
        <>
          <section className="cart">
            {/* <h1>Din kundvagn</h1> */}
            {cartList.map((toy) => (
              <div key={toy.id} className="cart-product">
                <img src={toy.img} alt="product img" />

                <div>
                  <h1>{toy.name}</h1>
                  <p>{toy.price * toy.quantity}:-</p>
                </div>

                <div className="cart-buttons">
                  <button onClick={() => removeFromCart(toy)}>-</button>
                  <p>{toy.quantity}</p>
                  <button onClick={() => addToCart(toy)}>+</button>
                </div>
              </div>
            ))}

            <section className="total">
              <div>
                <p>Antal:</p>
                <p>{totalProducts()}st</p>
              </div>
              <div>
                <p>Frakt:</p>
                <p>Gratis</p>
              </div>
              <div>
                <h3>Totalt:</h3>
                <h3>{totalPrice()}:-</h3>
              </div>
            </section>

            {/* <button>Gå till betalning</button> */}
          </section>
        </>
      )}
    </main>
  );
}

export default Cart;
