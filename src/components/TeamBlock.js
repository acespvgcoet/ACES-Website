import React from 'react'
import { Link } from 'react-router-dom'
import '../css/TeamBlock.css'
function TeamBlock({name,linkLoc}) {
    return (
            <div className = "teamBlock">
            <Link to = {`/teams/${linkLoc}`} className = "teamBlockLink">
                <div className =  "teamBlockArea">
                    <div className = "teamBlockName">{name}</div> 
                     </div>
            </Link>
            </div>
      
    )
}

export default TeamBlock
