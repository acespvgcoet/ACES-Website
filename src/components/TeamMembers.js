import React, { useEffect, useState } from 'react'
import InfoBlock from './InfoBlock'
import '../css/TeamMembers.css';
import { useParams } from 'react-router-dom';
import db from './firebase';
import { Avatar } from '@material-ui/core';
function TeamMembers() {
    const {teamName} = useParams();
    const [teamHeads,setTeamHeads] = useState([]);
    const [teamMembers,setTeamMembers] = useState([]);
    const [name,setName] = useState();
   useEffect(()=>{
       db.collection("teams").doc(teamName).get("name").then((doc)=>{
           if (doc.exists)
           {
               setName(doc.data().name)
           }
       })
       console.log(name)
       db.collection("teams").doc(teamName)?.collection("members").where("category","==","Head").orderBy("name","asc").onSnapshot((snapshot) => {
            setTeamHeads(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
       })
       db.collection("teams").doc(teamName)?.collection("members").where("category","==","Member").orderBy("name","asc").onSnapshot((snapshot) => {
        setTeamMembers(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
        })))
   })
   },[teamName])
    return (
        <div>
            <div className = "teamMembersHeader">
             <div className= "teamName">{name}</div>
                <Avatar className = "teamLogo"/>
            </div>
             <div className = "teamMembers">
            <div className = "teamMembersHeads">
                {teamHeads.map(teamHead => (
                    <InfoBlock name = {teamHead.data.name} designation = "Head"/>
                ))}
                
                {/* <InfoBlock/> */}
            </div>
            <div className = "teamMembersMembers">
            {teamMembers.map(teamMember => (
                    <InfoBlock name = {teamMember.data.name} designation = {teamMember.data.category}/>
                ))}
                
            </div>
        </div>
        </div>
       
    )
}

export default TeamMembers
