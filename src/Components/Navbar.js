import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";

function Navbar() {
  return (
    <div>
      <div className="title">
        <img src={logo} alt="logo" />
        <h2>Kotebe 7th Day Adventist Church</h2>
      </div>
      <nav>
        <Link to="/">Upcoming Events</Link>
        <Link to="/videos">Uploaded Videos</Link>
        <Link to="/members">Membership</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
}

export default Navbar;
