import React from "react";

function AboutUs() {
  return (
    <AboutUsContainer>
      <Header>About Us</Header>
      <SubHeader>Our Mission</SubHeader>
      <Content>
        Our mission is to deliver high-quality products that bring value to our
        customers and make a positive impact in the world. We believe in
        innovation, collaboration, and integrity in everything we do.
      </Content>
      <SubHeader>Meet the Team</SubHeader>
      <TeamContainer>
        {teamMembers.map((member, index) => (
          <TeamMember key={index}>
            <MemberPhoto src={member.photo} alt={`${member.name}'s photo`} />
            <MemberName>{member.name}</MemberName>
            <MemberRole>{member.role}</MemberRole>
          </TeamMember>
        ))}
      </TeamContainer>
    </AboutUsContainer>
  );
}

export default AboutUs;
