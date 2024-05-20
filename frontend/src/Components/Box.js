import React from "react";
import "./Box.css";

function Box({ title, image, description }) {
  return (
    <div className="box">
      <img src={image} alt={title} className="box-image" />
      <div className="box-content">
        <h3 className="box-title">{title}</h3>
        <p className="box-description">{description}</p>
      </div>
    </div>
  );
}

export default Box;
