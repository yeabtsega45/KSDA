import React from "react";
import "./Events.css";
import img1 from "../Assets/frontpage.jpg";
import EventData from "../Utils/EventData";
import Box from "../Components/Box";

function Events() {
  return (
    <div className="header">
      <img src={img1} alt="header_image" />
      <div
        className="overlay"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          // opacity: 0.5,
        }}
      />
      <h1>Upcoming Events</h1>
      <div className="event_cards">
        {EventData.map((event) => (
          <Box
            key={event.id}
            image={event.image}
            title={event.title}
            date={event.date}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
