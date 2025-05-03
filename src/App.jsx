import { NavLink, Outlet } from "react-router";
import "./App.css";
import menuIcon from "./assets/jam_menu.svg";
import crossIcon from "./assets/iconamoon_close-bold.svg";
import cartIcon from "./assets/mdi_cart-outline.svg";
import HamburgerMenu from "./components/HamburgerMenu";
import { useMenuStore } from "./data/store";

function App() {
  const { toggleMenu, isMenuOpen } = useMenuStore();

  return (
    <>
      <header>
        <HamburgerMenu />

        <img
          onClick={toggleMenu}
          className="hamburger-button"
          src={isMenuOpen ? crossIcon : menuIcon}
          alt="hamburger menu icon"
        />

        <NavLink to={"/"} className="logo">
          Leklådan
        </NavLink>

        <NavLink to={"/cart"}>
          <img className="cart-button" src={cartIcon} alt="cart store icon" />
        </NavLink>
      </header>

      <Outlet />

      <footer></footer>
    </>
  );
}

export default App;
