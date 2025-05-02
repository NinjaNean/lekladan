import React from "react";
import { useMenuStore } from "../data/store";

function HamburgerMenu() {
  const { isMenuOpen } = useMenuStore();

  return <div className={isMenuOpen ? "hamburger-menu open-menu" : "hamburger-menu"}>HamburgerMenu</div>;
}

export default HamburgerMenu;
