import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router";
import HomePage from "./components/home_page/HomePage.jsx";
import Products from "./components/product/Products.jsx";
import Cart from "./components/cart/Cart.jsx";
import Login from "./components/admin/Login.jsx";
import Admin from "./components/admin/Admin.jsx";

const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/admin",
        Component: Admin,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
