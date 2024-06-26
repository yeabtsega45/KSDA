import React from "react";
import "./Contact.css";
import PhoneIcon from "@material-ui/icons/Phone";
import location from "../Assets/location.png";
import Hero from "../Components/Hero";

function Contact() {
  return (
    <div className="contact">
      <Hero title="Contact Us" />
      <div className="contact_body">
        <div className="contact_phone">
          <h4>We would love to hear from you!</h4>
          <div className="phone">
            <PhoneIcon className="phone_icon" />
            <p>
              Pastor Mekit <br></br> +251963137715
            </p>
          </div>
        </div>
        <div className="contact_note">
          <p>
            Thank you for connecting with us online. If you’re a guest with us,
            please come to kotebe seventh day adventist church. We look forward
            to getting to know you as we continue to experience God together.
          </p>
        </div>
        <div className="contact_worship">
          <h3>የአምልኮ ጊዜ</h3>
          <p>ረቡዕ | ምሽት12:00</p>
          <p>አርብ | ምሽት12:00</p>
          <p>ቅዳሜ | ሙሉቀን</p>
        </div>
        <div className="contact_location">
          <div className="location_text">
            <h3>Location</h3>
            <p>Addis Ababa, Yeka, Kotebe</p>
          </div>
          <div className="location_img">
            <img src={location} alt="location" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
