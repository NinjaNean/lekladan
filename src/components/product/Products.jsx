import React from "react";
import { useMenuStore } from "../../data/store";
import Product from "./Product";
import "./product.css";

function Products() {
  const { storeToysList } = useMenuStore();

  return (
    <main className="product-page">
      <section className="search-sort">
        <input className="search" type="text" placeholder="Sök..." />

        <label className="sort-products" htmlFor="">
          Sortera efter
          <select name="" id="">
            <option value="">Pris stigande</option>
            <option value="">Pris fallande</option>
            <option value="">A-Ö</option>
            <option value="">Ö-A</option>
          </select>
        </label>
      </section>

      <div className="products">
        {storeToysList.map((toy) => {
          return <Product toy={toy} />;
        })}
      </div>
    </main>
  );
}

export default Products;
