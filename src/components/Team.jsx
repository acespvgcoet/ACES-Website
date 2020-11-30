import React, { useEffect, useState } from 'react'
import InfoBlock from './InfoBlock'
import '../css/Team.css'
import TeamBlock from './TeamBlock'
import db from './firebase';
function Team() {
  const [teams,setTeams] = useState([]);
  const [teachers,setTeachers] = useState([]);
  const [leads,setLeads] = useState([]);
  useEffect(()=>{
    db.collection("teams").onSnapshot((snapshot) => {
      setTeams(snapshot.docs.map((doc)=>({
        id: doc.id,
        data: doc.data(),
      })))
    })
    db.collection("heads").where("category","==","teacher").onSnapshot((snapshot) => {
      setTeachers(snapshot.docs.map((doc)=>({
        id: doc.id,
        data: doc.data()
      })))
    })
    db.collection("heads").where("category","==","student").onSnapshot((snapshot) => {
      setLeads(snapshot.docs.map((doc)=>({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[teams,teachers,leads])
  return (
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
{/*         
      <TeamBlock name = "Web"/>
      <TeamBlock name = "Editorial"/>
      <TeamBlock name = "Technical"/>
      <TeamBlock name = "Web"/>
      <TeamBlock name = "Editorial"/>
      <TeamBlock name = "Technical"/>
      <TeamBlock name = "Web"/>
      <TeamBlock name = "Editorial"/> */}
      </div>
      
    </div>
  )
}

export default Team
