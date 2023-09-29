import React from "react";
import "./Card_Vertical.css";
import YouTubeIcon from "@material-ui/icons/YouTube";

function CardVertical({ image, title }) {
  return (
    <div className="card_vertical">
      <img src={image} className="cardvertical_image" alt="images" />
      <YouTubeIcon className="card_icon" />
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default CardVertical;
