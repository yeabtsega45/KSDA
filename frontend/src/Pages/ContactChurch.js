import React from "react";
import "./ContactChurch.css";

const ContactChurch = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Us</h1>
      <div className="contact-info">
        <div className="contact-details">
          <h2>Church Address</h2>
          <p>02 Kotebe St, Yeka, Addis Ababa</p>
          <h2>Email</h2>
          <p>ksdac@gmail.com</p>
          <h2>Phone</h2>
          <p>(011) 456-7890</p>
        </div>
        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactChurch;
