import { useState } from "react";
import Product from "../product/Product";
import "./ProductCarousel.css";
import { useMenuStore } from "../../data/store";

function ProductCarousel() {
  const { storeToysList } = useMenuStore();
  const products = storeToysList.filter((toy) => toy.discount > 0);

  const [currentStart, setCurrentStart] = useState(0);
  const itemsPerPage = 3;
  const total = products.length;

  const getVisibleProducts = () => {
    return Array.from({ length: itemsPerPage }, (_, i) => {
      const index = (currentStart + i) % total;
      return products[index];
    });
  };

  const next = () => {
    setCurrentStart((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrentStart((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="carousel">
      <button onClick={prev}>{"<"}</button>

      <div className="carousel-items">
        {getVisibleProducts().map((toy) => (
          <Product key={toy.id} toy={toy} />
        ))}
      </div>

      <button onClick={next}>{">"}</button>
    </div>
  );
}

export default ProductCarousel;
