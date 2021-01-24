import React from "react";
import "../css/EventsCard.css";
function EventsCard({title,day,month,date,year,time}) {
  return (
     <div>
    <div class="card_title">
        {/* ANDROID WORKSHOP */}
        {title}
    <div class="card_des">
        <div class="date">
            <div class="day">
            <hr width="33%" align="center" size="2px" color="black"/>
            {day}
            {/* FRI */}
            <hr width="33%"  align="center" size="2px" color="black"/>
            </div>
            <div class="month">
                {month},{date}
                {/* OCT 22 */}
            </div>
            <div class="year">
                <hr width="40%" align="center" size="2px" color="black"/>
                {year}
                {/* 2020 */}
                <hr width="40%"  align="center" size="2px" color="black"/>
                </div>

        </div>
        <div class="time">
        <div class="no">
            {time}
            {/* 7 */}
        </div>
        <div class="pm">
            pm Onwards
        </div></div>
        <div >
            <button class="button">more</button>
        </div>
    </div>
    </div>
    </div> 
    
  );
}

export default EventsCard;
