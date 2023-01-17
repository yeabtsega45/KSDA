import React from "react";
import "./Card.css";

function Card({ image, title, date, description }) {
  return (
    <div className="card">
      <img src={image} className="card_image" alt="images" />
      <div className="card_text">
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
