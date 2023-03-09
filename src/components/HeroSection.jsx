import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className='container'>
      <img
        className="hero-image"
        src={"https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80"}
        alt='recipes'
      />
      <div className="title">
        <h2>The Best Ingredients; The Sweetest Recipes</h2>
        <p>
          We've partnered with incredible chefs, recipe creators,
          <br /> and curators to bring elevated dishes
          <br /> straight from our farms to your kitchen.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
