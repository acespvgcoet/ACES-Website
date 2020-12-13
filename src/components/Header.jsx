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
      <a className="headerLink" href = "https://tinyurl.com/y6gtcoje" target = "_blank">
        <p className = "headerNav">SUBMIT IDEA</p>
      </a>
      

      <NavLink className="headerLink" to="/contact">
        <p className = "headerNav">CONTACT</p>
      </NavLink>
    </div>
  );
}

export default Header;
