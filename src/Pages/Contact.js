import React from "react";
import img1 from "../Assets/frontpage.jpg";
import "./Contact.css";
import PhoneIcon from "@material-ui/icons/Phone";
import location from "../Assets/location.png";

function Contact() {
  return (
    <div>
      <div className="header">
        <img src={img1} alt="header_image" />
        <h1>About</h1>
      </div>
      <div className="about_body">
        <h4>We would love to hear from you!</h4>
        <div>
          <PhoneIcon />
          <p>Pastor Mekit "\n" +251963137715</p>
        </div>
        <p>
          Thank you for connecting with us online. If you’re a guest with us,
          please come to kotebe seventh day adventist church. We look forward to
          getting to know you as we continue to experience God together.
        </p>
        <h3>የአምልኮ ጊዜ</h3>
        <p>ረቡዕ | ምሽት12:00</p>
        <p>አርብ | ምሽት12:00</p>
        <p>ቅዳሜ | ሙሉቀን</p>
        <div>
          <h3>Location</h3>
          <p>Addis Ababa, Yeka, Kotebe</p>
        </div>
        <img src={location} alt="location" />
      </div>
    </div>
  );
}

export default Contact;
