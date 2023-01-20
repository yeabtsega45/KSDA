import React from "react";
import img1 from "../Assets/frontpage.jpg";
import "./Videos.css";
import Card_Vertical from "../Components/Card_Vertical";
import video1 from "../Assets/video1";
import video2 from "../Assets/video2";
import video3 from "../Assets/video3";
import video4 from "../Assets/video4";
import video5 from "../Assets/video5";
import video6 from "../Assets/video6";

function Videos() {
  return (
    <div className="header">
      <img src={img1} alt="header_image" />
      <h1>Uploaded Videos</h1>
      <div className="cards_vertical">
        <Card_Vertical image={video1} title="" description="" />
        <Card_Vertical image={video2} title="" description="" />
        <Card_Vertical image={video3} title="" description="" />
        <Card_Vertical image={video4} title="" description="" />
        <Card_Vertical image={video5} title="" description="" />
        <Card_Vertical image={video6} title="" description="" />
      </div>
    </div>
  );
}

export default Videos;
