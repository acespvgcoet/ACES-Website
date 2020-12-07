import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
function Header() {
  return (
    <div className="header">
      <NavLink className="headerLink" exact={true} to="/">
        <p className = "headerNav">HOME</p>
      </NavLink>
      <NavLink className="headerLink" to="/teams">
        <p className = "headerNav">TEAM</p>
      </NavLink>
      <a className="headerLink" >
        <p className = "headerNav">SUBMIT IDEA</p>
      </a>
      

      <NavLink className="headerLink" to="/contact">
        <p className = "headerNav">CONTACT</p>
      </NavLink>
    </div>
  );
}

export default Header;
