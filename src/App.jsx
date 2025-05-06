import { NavLink, Outlet } from "react-router";
import "./App.css";
import menuIcon from "./assets/jam_menu.svg";
import crossIcon from "./assets/iconamoon_close-bold.svg";
import cartIcon from "./assets/mdi_cart-outline.svg";
import HamburgerMenu from "./components/HamburgerMenu";
import { useEffect } from "react";
import { getSummerToys } from "./data/crud";
import { useMenuStore } from "./data/store";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { toggleMenu, isMenuOpen, setSummerToys, cartList } = useMenuStore();

  useEffect(() => {
    console.log("app");
    getSummerToys(setSummerToys);
  }, []);

  const productInCart = () => {
    return cartList.reduce((sum, toy) => sum + toy.quantity, 0);
  };

  return (
    <>
      <ScrollToTop />
      <header>
        {/* <HamburgerMenu />

        <img
          onClick={toggleMenu}
          className="hamburger-button"
          src={isMenuOpen ? crossIcon : menuIcon}
          alt="hamburger menu icon"
        /> */}

        <NavLink to={"/"} className="logo">
          Leklådan
        </NavLink>

        <NavLink className="cart-button-flex" to={"/cart"}>
          {productInCart() > 0 && <p className="cart-quantity">{productInCart()}</p>}
          <img className="cart-button" src={cartIcon} alt="cart store icon" />
        </NavLink>
      </header>

      <Outlet />

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
      </footer>
    </>
  );
}

export default App;
