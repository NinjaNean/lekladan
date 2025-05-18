import { NavLink } from "react-router";
import cartIcon from "./../assets/mdi_cart-outline.svg";

function Header({ productInCart }) {
  return (
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
  );
}

export default Header;
