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
        <a href="https://www.youtube.com/watch?v=6zS1QYcAi6c&t=2s">
          <CardVertical
            image={video1}
            title="ክርስትና ሠርግና ምላሽ - ቀን 03 - ፓስተር አብርሃም ተካ"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=SPcp4ejxSBA&t=1s">
          <CardVertical
            image={video2}
            title="ክርስትና ሠርግና ምላሽ - ቀን 02 - ፓስተር አብርሃም ተካ"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=5Ax128q0cZc">
          <CardVertical
            image={video3}
            title="ክርስትና ሠርግና ምላሽ - ቀን 01 - ፓስተር አብርሃም ተካ"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=LhjXa-eF1ro">
          <CardVertical
            image={video4}
            title="New song - ፍቅር ነህ - Fiker Neh - የኮተቤ ሰባተኛዉ ቀን አድቬንቴስት ቤተክርስቲያን መዘምራን"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=K9cZnroi6Lg">
          <CardVertical
            image={video5}
            title="ጓዳችን (guadachen) new standard short movies"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=me_M54g-6fI&t=2s">
          <CardVertical
            image={video6}
            title="ልዩ የሆነ የአምልኮ ምሽት በኮተቤ 7ኛ ቀን አድቬንቲስት ቤተክርስቲያን"
          />
        </a>
      </div>
    </div>
  );
}

export default Videos;
