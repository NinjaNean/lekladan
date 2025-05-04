import React from "react";
import heroImg from "../../assets/pexels-photo-6137955.jpeg";
import "./HomePage.css";
import { useMenuStore } from "../../data/store";
import Product from "../product/Product";
import "../product/Product.css";

function HomePage() {
  const { storeToysList } = useMenuStore();
  return (
    <main className="home-page">
      <img className="hero-img" src={heroImg} alt="" />

      <section className="selected-products">
        <div className="products">
          {storeToysList.map((toy) => toy.discount > 14 && <Product key={toy.id} toy={toy} />)}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
