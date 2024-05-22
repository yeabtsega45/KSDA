import React from "react";
import "./BottomBar.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TelegramIcon from "@material-ui/icons/Telegram";

function BottomBar() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            We are a community church dedicated to serving our congregation and
            the wider community.
          </p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: ksdac@gmail.com</p>
          <p>Phone: 011 456 7890</p>
          <p>Address: 02 Kotebe St, Yeka, Addis Ababa</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.youtube.com/@officialkotebesdachurch9361"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon className="icon" />
            </a>
            <a
              href="https://www.facebook.com/kotebesdachurch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="icon" />
            </a>
            <a
              href="https://t.me/OFFICIALKotebeSDAChurch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 Kotebe 7<sup>th</sup> Day Adventist Church. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default BottomBar;
