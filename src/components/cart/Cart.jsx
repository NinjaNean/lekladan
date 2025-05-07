import React from "react";
import "./Cart.css";
import { useMenuStore } from "../../data/store";
import { NavLink } from "react-router";
import trashCan from "../../assets/close.svg";

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
            {cartList.map((toy) => (
              <div key={toy.id} className="cart-product">
                {/* <button className="delete-from-cart">
                  <img src={trashCan} alt="" />
                </button> */}
                <img src={toy.img} alt="product img" />

                <div>
                  <h1>{toy.name}</h1>
                  <p>{toy.price * toy.quantity}:-</p>
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

            <section className="total">
              <div>
                <p>Totalt pris</p>
                <p>{totalPrice()}:-</p>
              </div>
              <div>
                <p>Antal produkter</p>
                <p>{totalProducts()} st</p>
              </div>
            </section>

            <button>Gå till betalning</button>
          </section>
        </>
      )}
    </main>
  );
}

export default Cart;
