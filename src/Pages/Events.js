import React from "react";
import "./Events.css";
import img1 from "../Assets/frontpage.jpg";
import Card from "../Components/Card";
import event_img1 from "../Assets/event1.jpeg";
import event_img2 from "../Assets/event2.jpeg";
import event_img3 from "../Assets/event3.jpeg";
import event_img4 from "../Assets/event4.jpeg";

function Events() {
  return (
    <div className="events">
      <img src={img1} alt="event_image" />
      <h1>Upcoming Events</h1>
      <div className="event_cards">
        <Card
          image={event_img1}
          title="kerestena serg ena melash"
          date="tahesas 27-29 2015"
          description="ye tselot ena ye ameleko gize"
        />
        <Card
          image={event_img2}
          title="nu abren getan enamelek"
          date="hidar 24, keseat 11:30"
          description="ye ameleko meshet"
        />
        <Card
          image={event_img3}
          title="ye neseha ena ye seryet program"
          date="pagume 4-5, 2014"
          description="yeteleyayu tegabaz mezemran, ye kal gize, ye tselot saten, yemayfelegewen maseweged"
        />
        <Card
          image={event_img4}
          title="yeh new tarike"
          date="hamele 15/2015, arb meshet 11:30-1:00"
          description="leyu yehone mesekerenet ke abel gar"
        />
      </div>
    </div>
  );
}

export default Events;
