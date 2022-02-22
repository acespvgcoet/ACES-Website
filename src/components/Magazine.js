import React, { useEffect, useState } from "react";
import MagazineCard from "./MagazineCard";
import MagazineIntro from "./MagazineIntro";
import MagazineFeature from "./MagazineFeature";

export default function Magazine(){



    return (
    <div>

        <MagazineIntro/>
        <MagazineFeature/>
        <div id="download"></div>
        <MagazineCard 
        magazineInfo={"Ace The Tech is a Innovation created through Thoughts,Ideas and Words. This is a Quarterly college magazine  which is like a Treasure for every PVGian, where all the creative minds learn and work hard together to create something new. From designing, writing an article, collecting insightful thoughts and organizing events...Aces is Proud to Publish their First magazine Ace the Tech. Let's Experience the First Ever Virtual Connect. Ace the Tech is a collection of Amazing Contributions depicting the Creative & Innovative minds of PVGians. It truly displays the real insight by reflecting our dreams, Thoughts, Achievements, Creativity & Imagination. It mainly focuses on Industrial & Nonindustrial Trends. The main objective of this quarterly magazine is to bring out collective efforts from all the teams and showcase their Extraordinary efforts to create unique themes quarterly."}
        magazineName={"ACE THE TECH"}
        />
    </div>
    )
}