import { NavLink, Outlet } from "react-router";
import "./App.css";
import menuIcon from "./assets/jam_menu.svg";
import cartIcon from "./assets/mdi_cart-outline.svg";
import HamburgerMenu from "./components/HamburgerMenu";
import { useMenuStore } from "./data/store";

function App() {
  const { toggleMenu } = useMenuStore();

  return (
    <>
      <header>
        <HamburgerMenu />

        <img onClick={toggleMenu} className="hamburger-button" src={menuIcon} alt="hamburger menu icon" />

        <NavLink to={"/"} className="logo">
          Leklådan
        </NavLink>

        <NavLink to={"/cart"}>
          <img className="cart-button" src={cartIcon} alt="cart store icon" />
        </NavLink>
      </header>

      <Outlet />
    </>
  );
}

export default App;
