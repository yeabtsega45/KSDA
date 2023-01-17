import React from "react";
import "./Events.css";
import img1 from "../Assets/frontpage.jpg";
import Card from "../Components/Card";
import img2 from "./Assets/.jpg";
import img3 from "./Assets/.jpg";
import img4 from "./Assets/.jpg";
import img5 from "./Assets/.jpg";

function Events() {
  return (
    <div className="events">
      <img src={img1} alt="event_image" />
      <h1>Upcoming Events</h1>
      <div className="cards">
        <Card image={img2} title="" date="" description="" />
        <Card image={img3} title="" date="" description="" />
        <Card image={img4} title="" date="" description="" />
        <Card image={img5} title="" date="" description="" />
      </div>
    </div>
  );
}

export default Events;
