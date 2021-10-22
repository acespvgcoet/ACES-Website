import React, { useEffect, useState } from "react";
import InfoBlock from "./InfoBlock";
import "../css/Team.css";
import TeamBlock from "./TeamBlock";
import db from "./firebase";
import Header from "./Header";
import teamimage from "../assets/images/team.png";

function Team() {
  const [teams, setTeams] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [leads, setLeads] = useState([]);
  const [name, setName] = useState();
  const [cat, setCat] = useState();
  const [imgL, setImgL] = useState();
  const [linkedInL, setLinkedInL] = useState();
  useEffect(() => {
    db.collection("teams").onSnapshot((snapshot) => {
      setTeams(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    db.collection("heads")
      .where("category", "==", "teacher")
      .onSnapshot((snapshot) => {
        setTeachers(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    db.collection("heads")
      .where("category", "==", "student")
      .onSnapshot((snapshot) => {
        setLeads(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, [teams, teachers, leads]);
  const send = (e) => {
    e.preventDefault();
    console.log(name, cat, imgL, linkedInL);
    console.log("eventmanagement");
    db.collection("teams").doc("eventmanagement").collection("members").add({
      name: name,
      category: cat,
      imgLink: imgL,
      linedInLink: linkedInL,
    });
    setName("");
    setCat("");
    setImgL("");
    setLinkedInL("");
  };
  return (
    <div>
      <Header />
      
      {/* Uncomment this to add Member Data Data To firestore */}
      
      {/* Name: <input type = "text" value={name} onChange={e => setName(e.target.value)}/><br/>
        Category: <input type = "text" value={cat} onChange={e => setCat(e.target.value)}/><br/>
        IMGLink: <input type = "text" value={imgL} onChange={e => setImgL(e.target.value)}/><br/>
        LinkedLink : <input type = "text" value={linkedInL} onChange={e => setLinkedInL(e.target.value)}/><br/>
        <button onClick  = {send}>Send</button><br/> */}
      <div className="teamheader">
        <div className="teampagetitle">
          <h1>The Team</h1>
          <p>Get to Know our 2020-21 Team</p>
        </div>

        <img className="teampagelogo" src={teamimage} alt="teamlogo" />
      </div>
      <div className="team" style={{ backgroundColor: "#e9edf0" }}>
        <h1>Team</h1>
        <div className="teamCoordinators">
          {teachers.map((teacher) => (
            <InfoBlock
              name={teacher.data.name}
              designation={teacher.data.designation}
              imgLink={teacher.data?.imgLink}
              linkedInLink={teacher.data?.linkedInLink}
            />
          ))}

          {/* <InfoBlock name = "ABC DEF" designation = "UVW XYZ"/> */}
        </div>
        <div className="teamCoordinators">
          {leads.map((lead) => (
            <InfoBlock
              name={lead.data.name}
              designation={lead.data.designation}
              imgLink={lead.data?.imgLink}
              linkedInLink={lead.data?.linkedInLink}
            />
          ))}
        </div>

        <div className="teamNames">
          {teams.map((team) => (
            <TeamBlock name={team.data.name} linkLoc={team.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
