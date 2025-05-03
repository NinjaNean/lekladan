import React from "react";
import { useMenuStore } from "../data/store";
import { NavLink } from "react-router";

function HamburgerMenu() {
  const { isMenuOpen, storeToysList } = useMenuStore();

  return (
    <div className={isMenuOpen ? "hamburger-menu open-menu" : "hamburger-menu"}>
      <NavLink to={"/products"}>ALLA PRODUKTER</NavLink>

      {/* {storeToysList.map((toy) => {
        <h3>{toy.categories}</h3>;
      })} */}
    </div>
  );
}

export default HamburgerMenu;
