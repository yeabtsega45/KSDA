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
          <p>Email: info@churchname.org</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Church St, City, Country</p>
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
        <p>&copy; 2024 Church Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default BottomBar;
