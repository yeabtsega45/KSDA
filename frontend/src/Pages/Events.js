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
        <Card
          image={event_img1}
          title="ክርስትና ፣ ሰርግ እና ምላሽ"
          date="ታህሳስ 27-29 2015"
          description="የፀሎት እና የአምልኮ ጊዜ"
        />
        <Card
          image={event_img2}
          title="ኑ አብረን ጌታን እናምልክ"
          date="ህዳር 24 ፣ ከሰዐት 11፡30"
          description="የአምልኮ ምሽት"
        />
        <Card
          image={event_img3}
          title="የንሰሃ እና የስርየት ፕሮግራም"
          date="ጳጉሜ 4-5 2014"
          description="የተለያዩ ተጋባዥ መዘምራን ፣ የቃል ጊዜ ፣ የፀሎት ሳጥን ፣ የማይፈለገውን ማስወገድ"
        />
        <Card
          image={event_img4}
          title="ይህ ነው ታሪኬ"
          date="ሀምሌ 15/2015 ፣ አርብ ምሽት 11፡30-1፡00"
          description="የተለየ ምስክርነት ከአቤል ጋር"
        />
      </div>
    </div>
  );
}

export default Events;
