import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
function Header() {
  return (
    <div className="header">
      <label for="hamburger">&#9776;</label>
  <input type="checkbox" id="hamburger"/>
      <NavLink className="headerLink" exact={true} to="/">
        <p className = "headerNav">HOME</p>
      </NavLink>
      <NavLink className="headerLink" to="/teams">
        <p className = "headerNav">TEAM</p>
      </NavLink>
      <NavLink className="headerLink" to="/blogs">
        <p className = "headerNav">BLOGS</p>
      </NavLink>
      <NavLink className="headerLink" to="/events">
        <p className = "headerNav">EVENTS</p>
      </NavLink>
      <NavLink className="headerLink" to="/contact">
        <p className = "headerNav">CONTACT</p>
      </NavLink>
    </div>
  );
}

export default Header;
