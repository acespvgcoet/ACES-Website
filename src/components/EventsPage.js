import React from "react";
import "../css/Events.css";
import EventsCard from "./EventsCard";
import "../css/EventsCard.css";

import Android from "../assets/images/Android.png";
import EventIllustartion from "../assets/images/events-illustration.png";

function EventsPage() {
  return (
    <div className="Events-container">
      <section className="events-header">
        <div>
          <h1>ACES EVENTS BAR</h1>
          <p>Stay tuned for upcoming events!</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={EventIllustartion} alt="events-illustartion" />
        </div>
      </section>
      <div
        className="timeline-container"
        style={{ backgroundColor: "#e9edf0" }}
      >
        <div id="timeline">
          <div className="card-image">
            <a
              href="https://www.instagram.com/acespvg/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="card-image" src={Android} alt="instagram-icon" />
            </a>
          </div>
          <div class="card">
            <EventsCard
              title="Android Workshop"
              day="FRI"
              month="Jan"
              date="23"
              year="2020"
              time="7"
            ></EventsCard>
          </div>
          <div className="card-image2">
            <a
              href="https://www.instagram.com/acespvg/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="card-image2" src={Android} alt="instagram-icon" />
            </a>
          </div>
          <div class="card2">
            <EventsCard
              title="Android Workshop"
              day="FRI"
              month="Jan"
              date="23"
              year="2020"
              time="7"
            ></EventsCard>
          </div>
          <div className="card-image">
            <a
              href="https://www.instagram.com/acespvg/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="card-image" src={Android} alt="instagram-icon" />
            </a>
          </div>
          <div class="card">
            <EventsCard
              title="Android Workshop"
              day="FRI"
              month="Jan"
              date="23"
              year="2020"
              time="7"
            ></EventsCard>
          </div>
          <div className="card-image2">
            <a
              href="https://www.instagram.com/acespvg/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="card-image2" src={Android} alt="instagram-icon" />
            </a>
          </div>
          <div class="card2">
            <EventsCard
              title="Android Workshop"
              day="FRI"
              month="Jan"
              date="23"
              year="2020"
              time="7"
            ></EventsCard>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EventsPage;
