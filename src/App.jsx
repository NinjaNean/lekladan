import { NavLink, Outlet, useLocation } from "react-router";
import "./App.css";
import cartIcon from "./assets/mdi_cart-outline.svg";
import { useEffect } from "react";
import { getSummerToys } from "./data/crud";
import { useMenuStore } from "./data/store";
import ScrollToTop from "./components/ScrollToTop";
import login from "./assets/icons8-login-50.png";
import menuIcon from "./assets/jam_menu.svg";
import crossIcon from "./assets/close.svg";
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  const { toggleMenu, isMenuOpen, setSummerToys, cartList } = useMenuStore();
  const location = useLocation();

  useEffect(() => {
    getSummerToys(setSummerToys);
  }, []);

  const productInCart = () => {
    return cartList.reduce((sum, toy) => sum + toy.quantity, 0);
  };

  return (
    <>
      <ScrollToTop />
      {location.pathname !== "/admin" && (
        <header>
          <NavLink to={"/"} className="logo">
            Leklådan
          </NavLink>

          <div className="menu-flex">
            <NavLink to={"/products"}>Produkter</NavLink>

            <NavLink className="cart-button-flex" to={"/cart"}>
              {productInCart() > 0 && <p className="cart-quantity">{productInCart()}</p>}
              <img className="cart-button" src={cartIcon} alt="cart store icon" />
            </NavLink>
          </div>
        </header>
      )}

      <Outlet />

      {location.pathname !== "/admin" && (
        <footer>
          <section>
            <NavLink to={"/"} className="logo">
              Leklådan
            </NavLink>

            <div>
              <h2>Kontakta oss</h2>
              <p>leklada@hotmail.se</p>
              <p>031 01 23 34</p>
            </div>
          </section>
          <p>© 2025 Leklådan</p>

          <NavLink to="/login">
            <img src={login} alt="" />
          </NavLink>
        </footer>
      )}
    </>
  );
}

export default App;
