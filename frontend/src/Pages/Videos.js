import React from "react";
import img1 from "../Assets/frontpage.jpg";
import "./Videos.css";
import Box from "../Components/Box";
import VideoData from "../Utils/VideoData";

function Videos() {
  return (
    <div className="header">
      <img src={img1} alt="header_image" />
      <h1>Uploaded Videos</h1>
      <div className="cards_vertical">
        {VideoData.map((video) => (
          <a key={video.id} href={video.url}>
            <Box image={video.image} title={video.title} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Videos;
