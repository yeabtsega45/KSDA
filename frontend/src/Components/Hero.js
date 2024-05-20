import React from "react";
import "./Hero.css";
import img1 from "../Assets/frontpage.jpg";

function Hero({ title }) {
  return (
    <div>
      <img src={img1} className="image" alt="header_image" />
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
