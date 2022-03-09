import React, { useEffect, useState } from "react";

import {v1} from 'uuid';
import "../css/MagazineCard.css";
import db,{time} from "./firebase";

export default function MagazineCard({magazineName,magazineInfo}){
    
    const [id,setId] = useState(v1());
    const [urls,setUrls] = useState([]);
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
        window.location.href = urls[0].data.url;
    }
    useEffect (()=>{
        db.collection("magazineurl")
        .where("isHosted", "==", true)
        .onSnapshot((snapshot) => {
          setUrls(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }, [urls]);
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
                            {urls.length == 1?(
                                <button type="button" id="downloadbutton" onClick={download}>Download Now</button>

                            ):(
                                <p>Magazine will be availaible for download soon</p>
                            )}
                        </div>
                </div>
            </div>
        </div>
    );
}