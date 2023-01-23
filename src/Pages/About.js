import React from "react";
import img1 from "../Assets/frontpage.jpg";
import "./About.css";

function About() {
  return (
    <div>
      <div className="header">
        <img src={img1} alt="header_image" />
        <h1>About</h1>
      </div>
      <div className="about_body">
        <h3>Mission Statement of the Seventh-day Adventist Church</h3>
        <h4>Our Mission</h4>
        <p>
          Make disciples of Jesus Christ who live as His loving witnesses and
          proclaim to all people the everlasting gospel of the Three Angels’
          Messages in preparation for His soon return (Matt 28:18-20, Acts 1:8,
          Rev 14:6-12).
        </p>
        <h4>Our Vision</h4>
        <p>
          In harmony with Bible revelation, Seventh-day Adventists see as the
          climax of God’s plan the restoration of all His creation to full
          harmony with His perfect will and righteousness.
        </p>
      </div>
    </div>
  );
}

export default About;
