import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

import '../css/InfoBlock.css';

function InfoBlock({name,designation,imgLink,linkedInLink}) {
   
    const [image,setImage] = useState();
    
    return (
        <a href = {linkedInLink}>
        <div className = "infoBlock">
            <div className = "infoBlockAvatarContainer">
                <Avatar id = "avatar" src = {imgLink} className = "infoBlockAvatar"/>
               
            </div>
            
            <div className = "details">
                <b>{name}</b>
                <p>{designation}</p>
            </div>
            
        </div>
        </a>
    )
}

export default InfoBlock
