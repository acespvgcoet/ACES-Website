import { Avatar } from '@material-ui/core';
import React from 'react'

import '../css/InfoBlock.css';
function InfoBlock({name,designation}) {
    return (
        <div className = "infoBlock">
            <div className = "infoBlockAvatarContainer">
                <Avatar className = "infoBlockAvatar"/>
            </div>
            
            <div className = "details">
                <b>{name}</b>
                <p>{designation}</p>
            </div>
            
        </div>
    )
}

export default InfoBlock
