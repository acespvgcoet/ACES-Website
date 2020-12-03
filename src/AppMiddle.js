import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "../src/css/AppMiddle.css";

function AppMiddle() {
  return (
    <div className="appmiddle">
      <div className="appmiddlecontent">
        <div style={{ display: "flex", alignItems: "center" }}>
          <MailIcon style={{ fontSize: 40, color: "orange" }}>Email</MailIcon>
          <h3 style={{ marginLeft: 10 }}>XYZ@gmail.com</h3>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <PhoneIcon style={{ fontSize: 40, color: "green" }}></PhoneIcon>
          <h3 style={{ marginLeft: 10 }}>+91 1111111111</h3>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <LocationOnIcon
            style={{ fontSize: 40, color: "red" }}
          ></LocationOnIcon>
          <h3 style={{ marginLeft: 10 }}>Locate Us</h3>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default AppMiddle;
