import React from "react";
import "../css/Contactupperpart.css";
import logo from "../assets/images/logo.svg";
function Appupperpart() {
  return (
    <header className="App-header">
      <div className="app-header-left">
        <h1>Contact Us</h1>
        <h3>Lets Get Connected</h3>
      </div>
      <div className="app-header-right">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </header>
  );
}

export default Appupperpart;
