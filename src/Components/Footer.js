import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";
import "./Footer.css";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import logo from "../Assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={logo} alt="logo" />
        <h2>Kotebe 7th Day Adventist Church</h2>
      </div>
      <div>
        <div className="info">
          <PersonIcon />
          <p>Pastor Mekit</p>
        </div>
        <div className="info">
          <PhoneIcon />
          <p>+251963137715</p>
        </div>
        <div className="info">
          <LocationOnIcon />
          <p>Addis Ababa, Yeka, Kotebe</p>
        </div>
      </div>
      <div>
        <a href="https://www.facebook.com/">
          <FacebookIcon className="icon" />
        </a>
        <a href="https://mail.google.com">
          <EmailIcon className="icon" />
        </a>
        <a href="https://telegram.org/">
          <TelegramIcon className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
