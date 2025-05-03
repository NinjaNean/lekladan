import React from "react";
import { useMenuStore } from "../data/store";
import { NavLink } from "react-router";

function HamburgerMenu() {
  const { isMenuOpen } = useMenuStore();

  return (
    <div className={isMenuOpen ? "hamburger-menu open-menu" : "hamburger-menu"}>
      <NavLink to={"/products"}>ALLA PRODUKTER</NavLink>
    </div>
  );
}

export default HamburgerMenu;
