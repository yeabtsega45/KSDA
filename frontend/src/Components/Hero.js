import React from "react";
import "./Hero.css";
import church from "../Assets/church.jpeg";

function Hero({ title }) {
  return (
    <div className="hero">
      <img src={church} className="image" alt="header_image" />
      <div
        className="overlay"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          // opacity: 0.5,
        }}
      >
        <h1 className="hero_title">{title}</h1>
      </div>
    </div>
  );
}

export default Hero;
