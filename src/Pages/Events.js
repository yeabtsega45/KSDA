import React from "react";
import "./Events.css";
import img1 from "../Assets/frontpage.jpg";

function Events() {
  return (
    <div className="events">
      <img src={img1} alt="event_image" />
      <h1>Upcoming Events</h1>
    </div>
  );
}

export default Events;
