import React, { useEffect, useState } from "react";
import { useMenuStore } from "../../data/store";
import Product from "./Product";
import "./product.css";

function Products() {
  const { storeToysList } = useMenuStore();
  const [activeView, setActiveView] = useState(storeToysList);

  useEffect(() => {
    setActiveView(storeToysList);
  }, [storeToysList]);

  const sortToysBy = (e) => {
    let newList = storeToysList.map((toy) => {
      const discountFactor = (100 - toy.discount) / 100;
      const discountedPrice = Math.round(toy.price * discountFactor);
      return { ...toy, sortedPrice: discountedPrice };
    });

    let sorted = [...newList];

    switch (e) {
      case "price-asc": {
        sorted.sort((a, b) => {
          return a.sortedPrice - b.sortedPrice;
        });
        break;
      }
      case "price-desc": {
        sorted.sort((a, b) => {
          return b.sortedPrice - a.sortedPrice;
        });

        break;
      }
      case "name-asc": {
        sorted.sort((toy1, toy2) => {
          let toyName1 = toy1.name;
          let toyName2 = toy2.name;

          if (toyName1 < toyName2) {
            return -1;
          }
          if (toyName1 > toyName2) {
            return 1;
          }
          return 0;
        });
        break;
      }
      case "name-desc": {
        sorted.sort((toy1, toy2) => {
          let toyName1 = toy1.name;
          let toyName2 = toy2.name;

          if (toyName1 < toyName2) {
            return 1;
          }
          if (toyName1 > toyName2) {
            return -1;
          }
          return 0;
        });
        break;
      }
    }

    setActiveView(sorted);
  };

  const handleSearch = (search) => {
    const result = storeToysList.filter((toy) => toy.name.toLowerCase().includes(search.toLowerCase()));
    setActiveView(result);
  };

  return (
    <main className="product-page">
      <section className="search-sort">
        <input className="search" type="text" placeholder="Sök..." onChange={(e) => handleSearch(e.target.value)} />

        <label className="sort-products" htmlFor="sort">
          Sortera efter
          <select name="sort" id="sort" defaultValue="" onChange={(e) => sortToysBy(e.target.value)}>
            <option value="" disabled>
              -- Välj --
            </option>
            <option value="price-asc">Pris stigande</option>
            <option value="price-desc">Pris fallande</option>
            <option value="name-asc">A-Ö</option>
            <option value="name-desc">Ö-A</option>
          </select>
        </label>
      </section>

      <div className="products">
        {activeView.map((toy) => {
          return <Product key={toy.id} toy={toy} />;
        })}
      </div>
    </main>
  );
}

export default Products;
