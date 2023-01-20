import React from "react";
import "./Card_Vertical.css";

function CardVertical({ image, title }) {
  return (
    <div className="card_vertical">
      <img src={image} className="cardvertical_image" alt="images" />
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default CardVertical;
