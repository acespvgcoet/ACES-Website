import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

import '../css/InfoBlock.css';

function InfoBlock({name,designation,imgLink,linkedInLink}) {
   
    const [image,setImage] = useState();
    
    return (
        <div className = "infoBlock">
            <div className = "infoBlockAvatarContainer">
                <a href = {linkedInLink}><Avatar id = "avatar" src = {imgLink} className = "infoBlockAvatar"/></a>
               
            </div>
            
            <div className = "details">
                <b>{name}</b>
                <p>{designation}</p>
            </div>
            
        </div>
    )
}

export default InfoBlock
