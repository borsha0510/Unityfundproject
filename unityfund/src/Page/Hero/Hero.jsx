import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/darkarrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Be The Reason Someone Smiles Today</h1>
        <p>
          We work to connect individuals or organizations seeking financial
          support with potential donors allowing them to overcome their poverty
          and deal with sudden accidents.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
