import React, { useEffect, useState } from "react";
import "../css/Events.css";
import EventsCard from "./EventsCard";
import "../css/EventsCard.css";
// import Android from "../assets/images/Android.png";
import EventIllustartion from "../assets/images/events-illustration.png";
import db from "./firebase";

function EventsPage() {
  const [events,setEvents] = useState([]);
  useEffect(()=>{
    db.collection("events").orderBy('dayAndDate','desc').onSnapshot((snapshot) => {
      setEvents(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
    })))
    // console.log(events);
    })
    
  },[events])
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
          {events.map((evt) => (
            <EventsCard
            imageLink1 = {evt.data.imageLink1}
            imageLink2 = {evt.data.imageLink2}
            imageLink3 = {evt.data.imageLink3}
            topic = {evt.data.topic}
            conductedBy = {evt.data.conductedBy}
            description = {evt.data.description}
            date = {new Date(evt.data.dayAndDate.toDate()).toDateString()}
            AuthorImageUrl = {evt.data.AuthorImageUrl}
            link = {evt.data.link}
            />
          ))}
           
        </div>
      </section>
    </div>
  );
}
export default EventsPage;
/*
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
*/