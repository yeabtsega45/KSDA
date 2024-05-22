import React from "react";
import "./BottomBar.css";

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
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
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
