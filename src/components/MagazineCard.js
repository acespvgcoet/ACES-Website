import React, { useEffect, useState } from "react";

import "../css/MagazineCard.css";

export default function MagazineCard({magazineName,magazineInfo}){

    return(
        <div className="root" >
            <div className="heading">
                <h1><b>{magazineName}</b></h1> 
            </div>
            <div className="body">
                <div className="card">
                        <div className="image">
                            <img  className="img" src={require('../assets/images/Magazene1.png').default} alt="Magazine Image"/>
                        </div>

                        <div className="container">
                            <div className="heading2"><h2><b>{magazineName}</b></h2> </div>
                            <p>{magazineInfo}</p> 
                            <button type="button" id="downloadbutton">Download Now</button>
                        </div>
                </div>
            </div>
        </div>
    );
}