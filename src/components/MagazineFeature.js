import React, { useEffect, useState } from "react";

import "../css/MagazineFeature.css";

export default function MagazineFeature(){

    return(
        <div className="root">
            <br/>
            <br/>
            <br/>
            
            <h1>What's Inside?</h1>
            <p id="firstpara">Dive into the collection of fascinating Industry Reviews, Latest Tech blogs and inspiring interviews by our Seniors...
Latest competition updates to Participate, Set the standards and kill the competition.</p>
            <br/>
            <div class="row">
                <div class="column" id="first">
                    <div class="insideFeature">
                        <h3>Competition Updates</h3>
                        <p><i>"SET the standards, and KILL the competitions"</i>
<br/>
Competitions will provide an enriching and stimulating experience that allows you to apply your knowledge to a specific, practical problem.</p>
                    </div>
                    
                </div>
                <div class="column">
                    <div class="insideFeature" id="second">
                        <h3>Emerging Startups</h3>
                        <p><i>"It's not about ideas. It's about making ideas happen"</i>
                        <br/>
    Take a look at how AVATAAR and TAC Security bagged their goal from Zero to Hero!</p>
                    </div>
                </div>
                <div class="column">
                    <div class="insideFeature" id="third">
                        <h3>Pandemic and Tech</h3>
                        <p>Covid brought the world to a standstill, but advances in tech helped us overcome this challenge. Take a sneak-peek at how we were able to achieve this position</p>
                    </div>
                </div>
            </div>
        </div>
    );
}