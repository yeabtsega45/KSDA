import React from "react";

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="header">About Us</div>
      <div className="sub-header">Our Mission</div>
      <div className="content">
        Our mission is to deliver high-quality products that bring value to our
        customers and make a positive impact in the world. We believe in
        innovation, collaboration, and integrity in everything we do.
      </div>
      <div className="sub-header">Meet the Team</div>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img
              className="member-photo"
              src={member.photo}
              alt={`${member.name}'s photo`}
            />
            <div className="member-name">{member.name}</div>
            <div className="member-role">{member.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
