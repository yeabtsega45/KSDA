import React from "react";
import "./AboutUs.css";
import teamMembers from "../Utils/TeamMembers";
import Hero from "../Components/Hero";

function AboutUs() {
  return (
    <>
      <Hero title="About Us" />
      <div className="about-us-container">
        <div className="sub-header">Our Mission</div>
        <div className="content">
          Make disciples of Jesus Christ who live as His loving witnesses and
          proclaim to all people the everlasting gospel of the Three Angels’
          Messages in preparation for His soon return (Matt 28:18-20, Acts 1:8,
          Rev 14:6-12).
        </div>
        <div className="sub-header">Meet Our Leaders</div>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img
                className="member-photo"
                src={member.photo}
                alt={member.name}
              />
              <div className="member-name">{member.name}</div>
              <div className="member-role">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutUs;
