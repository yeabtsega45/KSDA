import React from "react";
import "./Card.css";

function Card({ image, title, date, description }) {
  return (
    <div className="card">
      <div className="image_container">
        <img src={image} className="card_image" alt="images" />
      </div>
      <div className="card_text">
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
