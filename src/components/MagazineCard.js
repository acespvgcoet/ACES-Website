import React, { useEffect, useState } from "react";

import "../css/MagazineCard.css";

export default function MagazineCard(){

    return(
        <div className="root">

            <div className="card">
            <img src="src\assets\images\Magazene1.png" alt="Avatar"/>
            <div className="container">
                <h4><b>Magazine 1</b></h4> 
                <p>lorem epsum 10</p> 
            </div>
            </div>
        </div>
    );
}