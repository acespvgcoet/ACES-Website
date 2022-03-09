import React, { useEffect, useState } from "react";

import {v1} from 'uuid';
import "../css/MagazineCard.css";
import db,{time} from "./firebase";

export default function MagazineCard({magazineName,magazineInfo}){
    
    const [id,setId] = useState(v1());
    
    const download = () => {
        if (localStorage.getItem("ace-the-tech"))
        {
            
            db.collection("magazine").doc(localStorage.getItem("ace-the-tech"))?.collection("count").add({
                "time": time, 
            })
        }
        else
        {
            
            
            localStorage.setItem("ace-the-tech",id)
            db.collection("magazine").doc(id).set(
                {
                    "time": time
                }
            )
        }
        window.location.href = "https://firebasestorage.googleapis.com/v0/b/aces-website-9fc34.appspot.com/o/ACES.pdf?alt=media&token=23c96b78-2da5-4072-a960-a52921fabd91"
    }
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
                            <button type="button" id="downloadbutton" onClick={download}>Download Now</button>
                        </div>
                </div>
            </div>
        </div>
    );
}