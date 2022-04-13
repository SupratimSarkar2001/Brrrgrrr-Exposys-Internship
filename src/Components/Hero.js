import React from "react";
import "./hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="left__hero">
        <h1>Eat Better Burgers</h1>
        <p>Eat Like a King! Enjoy Every Bite And Lost in Taste.</p>
      </div>
      <div className="right__hero">
        <img
          src="https://cdn.dribbble.com/users/3474264/screenshots/15121223/media/0fdc95d8e1c3d7876701ed8f99ee0f0d.jpg"
          alt=""
          className="hero__image"
        />
      </div>
    </div>
  );
}

export default Hero;
