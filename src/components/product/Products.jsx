import React from "react";
import { useMenuStore } from "../../data/store";
import Product from "./Product";
import "./product.css";

function Products() {
  const { storeToysList } = useMenuStore();

  return (
    <div className="products">
      {storeToysList.map((toy) => {
        return <Product toy={toy} />;
      })}
    </div>
  );
}

export default Products;
