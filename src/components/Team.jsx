
import React, { useEffect, useState } from 'react'
import InfoBlock from './InfoBlock'
import '../css/Team.css'
import TeamBlock from './TeamBlock'
import db from './firebase';
import Header from './Header';

import React from 'react'

function Team() {
  return (
    <div>

      <Header/>
      <div className = "team">
      <div className="teamCoordinators">
        {teachers.map(teacher => (
          <InfoBlock name = {teacher.data.name} designation = {teacher.data.designation}/>
        ))}
        
        {/* <InfoBlock name = "ABC DEF" designation = "UVW XYZ"/> */}
      </div>
      <div className="teamCoordinators">
      {leads.map(lead =>(
         <InfoBlock name = {lead.data.name} designation = {lead.data.designation}/>
      ))}
      </div>
      
      <div className = "teamNames">
      {teams.map(team => (
        <TeamBlock name = {team.data.name} linkLoc = {team.id}/>
      ))}

      </div>
      

    </div>
    </div>
  )
}

export default Team
