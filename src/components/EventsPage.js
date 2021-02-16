import React from "react";
import "../css/Events.css";
import EventsCard from "./EventsCard";
import "../css/EventsCard.css";
// import Android from "../assets/images/Android.png";
import EventIllustartion from "../assets/images/events-illustration.png";

function EventsPage() {
  return (
    <div className="Events-container">
      <section className="events-header">
        <div>
          <h1>ACES EVENTS RECORD</h1>
          <p>Stay tuned for upcoming events!</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={EventIllustartion} alt="events-illustartion" />
        </div>
      </section>
      <section style={{ backgroundColor: "#e9edf0" }}>
      <div className="eventsposition">
             
              <EventsCard
              topic="Code Mode"
              day="Sunday"
              date="14 Feb 2021"
              conductedBy="TechTeam"
              description='The use of the term "technology" has changed significantly over
             the last 200 years. The use of the term "technology" has changed
             significantly over The use of the term "technology" has changed
             significantly over Before the 20th century, the term was The use'
             ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_77Q9--9lc-p54oWmdHl2q6W5sSSwa82KA&usqp=CAU"
             AuthorImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjXeHpaZHyFx2UDnOOxyk8mSMadIa1owVsg&usqp=CAU"
             ></EventsCard>
           
              <EventsCard
              topic="UI/UX designing"
              day="Sunday"
              date="14 Feb 2021"
              conductedBy="Yogiraj"
              description='The use of the term "technology" has changed significantly over
             the last 200 years. The use of the term "technology" has changed
             significantly over The use of the term "technology" has changed
             significantly over Before the 20th century, the term was The use'
             ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_77Q9--9lc-p54oWmdHl2q6W5sSSwa82KA&usqp=CAU"
             AuthorImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjXeHpaZHyFx2UDnOOxyk8mSMadIa1owVsg&usqp=CAU"
            ></EventsCard>
              <EventsCard
              topic="How Technology is Growing"
              day="Sunday"
              date="14 Feb 2021"
              conductedBy="Arya"
              description='The use of the term "technology" has changed significantly over
             the last 200 years. The use of the term "technology" has changed
             significantly over The use of the term "technology" has changed
             significantly over Before the 20th century, the term was The use'
             ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_77Q9--9lc-p54oWmdHl2q6W5sSSwa82KA&usqp=CAU"
             AuthorImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjXeHpaZHyFx2UDnOOxyk8mSMadIa1owVsg&usqp=CAU"
            ></EventsCard>
          
            </div>
          

    </section>
    </div>
  );
}
export default EventsPage;
