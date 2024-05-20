import React from "react";
import "./Events.css";
import EventData from "../Utils/EventData";
import Box from "../Components/Box";
import Hero from "../Components/Hero";

function Events() {
  return (
    <div className="header">
      <Hero title="Upcoming Events" />
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
