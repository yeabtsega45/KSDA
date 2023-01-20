import React from "react";
import img1 from "../Assets/frontpage.jpg";
import "./Videos.css";
import CardVertical from "../Components/Card_Vertical";
import video1 from "../Assets/video1.png";
import video2 from "../Assets/video2.png";
import video3 from "../Assets/video3.png";
import video4 from "../Assets/video4.png";
import video5 from "../Assets/video5.png";
import video6 from "../Assets/video6.png";

function Videos() {
  return (
    <div className="header">
      <img src={img1} alt="header_image" />
      <h1>Uploaded Videos</h1>
      <div className="cards_vertical">
        <CardVertical
          image={video1}
          title="ክርስትና ሠርግና ምላሽ - ቀን 03 - ፓስተር አብርሃም ተካ"
        />
        <CardVertical
          image={video2}
          title="ክርስትና ሠርግና ምላሽ - ቀን 02 - ፓስተር አብርሃም ተካ"
        />
        <CardVertical
          image={video3}
          title="ክርስትና ሠርግና ምላሽ - ቀን 01 - ፓስተር አብርሃም ተካ"
        />
        <CardVertical
          image={video4}
          title="New song - ፍቅር ነህ - Fiker Neh - የኮተቤ ሰባተኛዉ ቀን አድቬንቴስት ቤተክርስቲያን መዘምራን"
        />
        <CardVertical
          image={video5}
          title="ጓዳችን (guadachen) new standard short movies"
        />
        <CardVertical
          image={video6}
          title="ልዩ የሆነ የአምልኮ ምሽት በኮተቤ 7ኛ ቀን አድቬንቲስት ቤተክርስቲያን"
        />
      </div>
    </div>
  );
}

export default Videos;
