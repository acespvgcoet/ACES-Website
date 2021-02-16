import React from "react";
import "../css/EventsCard.css";
function EventsCard({ description,day,date, topic,conductedBy }) {
  return (
    <div className="Events_main">
      <div className="Events_left">
        <img src="https://images.wallpaperscraft.com/image/laptop_keyboard_glow_170138_300x168.jpg"></img>
      </div>
      <div className="Events_right">
        <div className="Events_right_main">
        <div className="Events_title">
          <h3>{day },{date}</h3>
          </div>
          <div className="Events_topic">
            <h1>{topic}</h1>
          </div>
        
          <div className="Events_des">
            <p>{description}</p>
          </div>
        </div>
        <div className="author">
          <div className="author_img"></div>
        <h3>{conductedBy}</h3>
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
