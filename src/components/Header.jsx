import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
function Header() {
  return (
    <div className="header">
      <NavLink className="headerLink" exact={true} to="/">
        <p>HOME</p>
      </NavLink>
      <NavLink className="headerLink" to="/teams">
        <p>TEAM</p>
      </NavLink>

      <p>SUBMIT IDEA</p>

      <NavLink className="headerLink" to="/contact">
        <p>CONTACT</p>
      </NavLink>
    </div>
  );
}

export default Header;
