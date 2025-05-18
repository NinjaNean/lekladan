import { NavLink, Outlet, useLocation } from "react-router";
import "./App.css";
import { useEffect } from "react";
import { getSummerToys } from "./data/crud";
import { useMenuStore } from "./data/store";
import ScrollToTop from "./helpers/ScrollToTop";
import login from "./assets/icons8-login-50.png";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const { setSummerToys, cartList } = useMenuStore();
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
      {location.pathname !== "/admin" && <Header productInCart={productInCart} />}

      <Outlet />

      {location.pathname !== "/admin" && <Footer login={login} />}
    </>
  );
}

export default App;
