import React from 'react'
import "../css/Events.css";

import Android from "../assets/images/Android.png";

import EventsCard from"./EventsCard";
import "../css/EventsCard.css";
// import { Android } from '@material-ui/icons';

function EventsPage() {
    return (
    <div>
        <div className="Events-container">
            <h2> ACES&nbsp; EVENTS &nbsp;BAR </h2>
            <div className="timeline-container">
            <div id="timeline">
            <div className="card-image" >
            <a
                  href="https://www.instagram.com/acespvg/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="card-image"
                    src={Android}
                    alt="instagram-icon"
                  />
                </a>
            </div>
            <div class="card"><EventsCard 
            title="Android Workshop"
            day="FRI"
            month="Jan"
            date="23"
            year="2020"
            time="7"></EventsCard></div>
            <div className="card-image2" >
            <a
                  href="https://www.instagram.com/acespvg/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="card-image2"
                    src={Android}
                    alt="instagram-icon"
                  />
                </a>
            </div>
            <div class="card2"><EventsCard 
            title="Android Workshop"
            day="FRI"
            month="Jan"
            date="23"
            year="2020"
            time="7"></EventsCard></div>
             <div className="card-image" >
            <a
                  href="https://www.instagram.com/acespvg/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="card-image"
                    src={Android}
                    alt="instagram-icon"
                  />
                </a>
            </div>
            <div class="card"><EventsCard 
            title="Android Workshop"
            day="FRI"
            month="Jan"
            date="23"
            year="2020"
            time="7"></EventsCard></div>
             <div className="card-image2" >
            <a
                  href="https://www.instagram.com/acespvg/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="card-image2"
                    src={Android}
                    alt="instagram-icon"
                  />
                </a>
            </div>
            <div class="card2"><EventsCard 
            title="Android Workshop"
            day="FRI"
            month="Jan"
            date="23"
            year="2020"
            time="7"></EventsCard></div>
            </div>
            
            </div>   
        </div>
    </div>
      
    )
}

export default EventsPage
