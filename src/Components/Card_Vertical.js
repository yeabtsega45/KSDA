import React from "react";
import "./Card_Vertical.css";

function Post({ image, title, description }) {
  return (
    <div className="card_vertical">
      <img src={image} className="cardvertical_image" alt="images" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Post;
