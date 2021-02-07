import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "../css/ContactMiddle.css";

function AppMiddle() {
  return (
    <div className="appmiddle" style={{ backgroundColor: "#e9edf0" }}>
      <div className="appmiddlecontent">
        <div style={{ display: "flex", alignItems: "center" }}>
          <MailIcon style={{ fontSize: 40, color: "orange" }}>Email</MailIcon>
          <h3 style={{ marginLeft: 10 }}>aces@pvgcoet.ac.in</h3>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <PhoneIcon style={{ fontSize: 40, color: "green" }}></PhoneIcon>
          <h3 style={{ marginLeft: 10 }}>+91 9049600422</h3>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <LocationOnIcon
            style={{ fontSize: 40, color: "red" }}
          ></LocationOnIcon>
          <h3 style={{ marginLeft: 10 }}>
            {" "}
            ACES | PVG’s College of Engineering and Technology<br></br>
            44, Vidya Nagari, Shivdarshan, Parvati,Pune – 411009 Maharashtra –
            INDIA
          </h3>
          <br></br>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default AppMiddle;
