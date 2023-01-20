import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
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
      <div className="footer_body">
        <div className="footer_contact">
          <h4>Contact</h4>
          <div className="info">
            <PersonIcon />
            <p>Pastor Mekit</p>
          </div>
          <div className="info">
            <PhoneIcon />
            <p>+251963137715</p>
          </div>
          <div>
            <a href="https://t.me/OFFICIALKotebeSDAChurch">
              <TelegramIcon className="icon" />
            </a>
            <a href="https://www.facebook.com/kotebesdachurch/">
              <FacebookIcon className="icon" />
            </a>
            <a href="https://www.youtube.com/@officialkotebesdachurch9361">
              <YouTubeIcon className="icon" />
            </a>
          </div>
        </div>
        <div className="footer_location">
          <h4>Location</h4>
          <div className="info">
            <LocationOnIcon />
            <p>Addis Ababa, Yeka, Kotebe</p>
          </div>
        </div>
        <div className="footer_other">
          <h4>የአምልኮ ጊዜ</h4>
          <p>ረቡዕ | ምሽት12:00</p>
          <p>አርብ | ምሽት12:00</p>
          <p>ቅዳሜ | ሙሉቀን</p>
        </div>
      </div>
      <p className="copyright">
        Copyright © 2023 Kotebe 7th Day Adventist Church | Designed by Yeabtsega
        Yeshidnber
      </p>
    </div>
  );
}

export default Footer;
