import { useEffect, useState } from "react";
import { useMenuStore } from "../../data/store";
import Product from "./Product";
import "./product.css";
import sortToysBy from "../../helpers/SortToyFunction";

function Products() {
  const { storeToysList } = useMenuStore();
  const [renderedList, setRenderedList] = useState(storeToysList);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setRenderedList(storeToysList);
  }, [storeToysList]);

  const searchList = renderedList.filter((toy) => toy.name.toLowerCase().includes(inputText.toLowerCase()));

  return (
    <main className="product-page">
      <section className="search-sort">
        <input className="search" type="text" placeholder="Sök..." onChange={(e) => setInputText(e.target.value)} />

        <label className="sort-products" htmlFor="sort">
          Sortera efter
          <select
            name="sort"
            id="sort"
            defaultValue=""
            onChange={(e) => setRenderedList(sortToysBy(e.target.value, renderedList))}
          >
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

      {searchList.length < 1 ? (
        //Styla detta bra!!
        <p className="no-search-results">
          🎈 Hoppsan! Inga leksaker gömde sig bakom det ordet 🔍. Prova att leta igen – vi har massor av kul 🎁🪁✨!
        </p>
      ) : (
        <div className="products">
          {searchList.map((toy) => {
            return <Product key={toy.id} toy={toy} />;
          })}
        </div>
      )}
    </main>
  );
}

export default Products;
