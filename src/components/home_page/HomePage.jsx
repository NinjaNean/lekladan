import React from "react";
import heroImg from "../../assets/pexels-photo-6137955.jpeg";
import "./HomePage.css";

function HomePage() {
  return (
    <main className="home-page">
      <img className="hero-img" src={heroImg} alt="" />
    </main>
  );
}

export default HomePage;
