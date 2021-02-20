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
           imageLink1="https://firebasestorage.googleapis.com/v0/b/aces-website-9fc34.appspot.com/o/index.jpeg?alt=media&token=5159b417-003d-4c62-9686-effec9fc959a"
           imageLink2="https://firebasestorage.googleapis.com/v0/b/aces-website-9fc34.appspot.com/o/Desert.jpg?alt=media&token=f01e4845-bf54-43fa-938b-607f72ea1013"
           imageLink3="https://firebasestorage.googleapis.com/v0/b/aces-website-9fc34.appspot.com/o/Lighthouse.jpg?alt=media&token=20dd8f55-effd-4ed2-939d-22f0d7c29b6f"
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
          imageLink1="https://firebasestorage.googleapis.com/v0/b/aces-website-9fc34.appspot.com/o/index.jpeg?alt=media&token=5159b417-003d-4c62-9686-effec9fc959a"
          imageLink2="https://firebasestorage.googleapis.com/v0/b/aces-website-9fc34.appspot.com/o/Desert.jpg?alt=media&token=f01e4845-bf54-43fa-938b-607f72ea1013"
          imageLink3="https://firebasestorage.googleapis.com/v0/b/aces-website-9fc34.appspot.com/o/Lighthouse.jpg?alt=media&token=20dd8f55-effd-4ed2-939d-22f0d7c29b6f"
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
          imageLink1="https://firebasestorage.googleapis.com/v0/b/aces-website-9fc34.appspot.com/o/index.jpeg?alt=media&token=5159b417-003d-4c62-9686-effec9fc959a"
          imageLink2="https://firebasestorage.googleapis.com/v0/b/aces-website-9fc34.appspot.com/o/Desert.jpg?alt=media&token=f01e4845-bf54-43fa-938b-607f72ea1013"
          imageLink3="https://firebasestorage.googleapis.com/v0/b/aces-website-9fc34.appspot.com/o/Lighthouse.jpg?alt=media&token=20dd8f55-effd-4ed2-939d-22f0d7c29b6f"
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
