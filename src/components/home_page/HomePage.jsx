import React from "react";
import heroImg from "../../assets/pexels-photo-6137955.jpeg";
import "./HomePage.css";
import "../product/Product.css";
import { NavLink } from "react-router";
import beachImg from "../../assets/beach.jpg";
import outsideImg from "../../assets/outside.webp";
import sportImg from "../../assets/sport.webp";
import waterImg from "../../assets/water.webp";

function HomePage() {
  return (
    <main className="home-page">
      <img className="hero-img" src={heroImg} alt="" />

      <section className="lekladan-presentation">
        <img
          src="https://media.istockphoto.com/id/1470000848/photo/black-kids-children-and-blowing-bubbles-at-park-having-fun-and-bonding-girls-happy-sisters.jpg?s=612x612&w=0&k=20&c=mj4gWGkh4gryBxxrATYGDe8jTqR_az2dHANVe30R02k="
          alt=""
        />
        <div>
          <h1>🎉 Välkommen till Leklådan – sommarens roligaste butik!</h1>
          <p>
            Hos oss hittar du ett handplockat sortiment av sommarleksaker som bjuder in till lek, rörelse och glädje
            utomhus. Oavsett om du letar efter vattenleksaker, utomhusspel eller klassiska strandfavoriter har vi något
            för barn i alla åldrar.
          </p>
          <p>
            Vi älskar lek – och vi vet att de bästa sommarminnena börjar med rätt leksaker. Leklådan är fylld med både
            nyheter och tidlösa favoriter, och vi erbjuder snabba leveranser så att du kan komma igång med leken direkt.
          </p>
          <p>☀️ Gör sommaren magisk – upptäck vårt sortiment idag!</p>
          <NavLink className="button" to={"/products"}>
            Gå till produkterna
          </NavLink>
        </div>
      </section>

      <section className="categorys">
        <div>
          <img src={outsideImg} />
          <p>Uteleksaker</p>
        </div>
        <div>
          <img src={sportImg} />
          <p>Rörelse & Sport</p>
        </div>
        <div>
          <img src={beachImg} />
          <p>Till stranden</p>
        </div>
        <div>
          <img src={waterImg} />
          <p>Vattenleksaker</p>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
