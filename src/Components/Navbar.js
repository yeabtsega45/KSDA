import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Navbar() {
  const [show, setShow] = useState(true);
  return (
    <div className="navbar">
      <div className="title">
        <img src={logo} alt="logo" />
        <h2>
          Kotebe 7<sup>th</sup> Day Adventist Church
        </h2>
      </div>
      <nav
        className={show ? "nav-links" : "nav-links-mobile"}
        onClick={() => setShow(true)}
      >
        <NavLink to="/">Upcoming Events</NavLink>
        <NavLink to="/videos">Uploaded Videos</NavLink>
        <NavLink to="/members">Membership</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
      <button className="mobile-menu-icon" onClick={() => setShow(!show)}>
        {show ? <MenuIcon /> : <CloseIcon />}
      </button>
    </div>
  );
}

export default Navbar;
