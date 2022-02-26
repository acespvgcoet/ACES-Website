import React, { useEffect, useState } from "react";

import "../css/MagazineIntro.css";
export default function MagazineIntro(){

    return(
        // <div className="root">
        // <div className="Mainlogo">
        //     <img src={require('../assets/images/aces.png').default} id = 'aceslogo'/>
        // </div>
        // <div className="BookCover">
        //     <div className="MainHeading">
        //     <h1 id="BookHeading">ACE THE TECH<br/><br/></h1>
        //     <h2 id="SubHeading">IF YOU WANT TO ACE IN TECH<br/>DOWNLOAD ACE THE TECH</h2>
        //     </div>
        // <img src={require('../assets/images/Book cover.png').default} id = 'bookimage'/>
        // </div>
        // </div>
        <div className="root">
            {/* <div className="Mainlogo">
            <img src={require('../assets/images/aces.png').default} id = 'aceslogo'/>
            </div> */}
            <div className="MainHeading">
                <div className="left-side">
                    <h2 id="BookHeading">ACE THE TECH</h2>
                    <h3 id="SubHeading">If You Want To Ace In Tech<br/>Download Ace The Tech</h3><br/>
                    <a href="#download"><button type="button" id="downloadbutton">Download Now</button></a>
                </div>
                <div className="right-side">
                    <img src={require('../assets/images/bookcover.png').default} id = 'bookcover'/>
                    <div className="colorbox"></div>


                </div>
            </div>
        </div>
    )

   
}