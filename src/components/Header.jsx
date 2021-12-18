import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
import ACES from "../assets/images/aces.png";
function Header() {
  return (
    <div className="header">
      
    <NavLink className="home"  to="/">
      <img src={ACES} className="aceslogo" alt="ACES-logo" />
    </NavLink>

    <label for="hamburger">&#9776;</label>
    <input type="checkbox" id="hamburger"/>
    
    <div className="NavMenu">

      <NavLink activeClassName="active" className="headerLink" to="/teams">
        <button className="headerNav">TEAM</button>
      </NavLink>
      <NavLink activeClassName="active" className="headerLink" to="/blogs">
        <button className="headerNav">BLOGS</button>
      </NavLink>
      <NavLink activeClassName="active" className="headerLink" to="/events">
        <button className = "headerNav">EVENTS</button>
      </NavLink> 
      <NavLink activeClassName="active" className="headerLink" to="/contact">
        <button className="headerNav">CONTACT</button>
      </NavLink>
      <div  className="headerButtons">  
        <NavLink activeClassName="active" to = "/signin">
          <button className="secondary-button ">Login</button>
        </NavLink>
        <NavLink activeClassName="active" to='/signup'>
          <button className="primary-button">Register</button>
        </NavLink>
      </div>
      

      
    </div>
    

    
  </div>
  );
}

export default Header;

/*

    <div className="header">
      <label for="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger" />
      <NavLink className="headerLink" exact={true} to="/">
        <p className="headerNav">HOME</p>
      </NavLink>
      <NavLink className="headerLink" to="/teams">
        <p className="headerNav">TEAM</p>
      </NavLink>
      <NavLink className="headerLink" to="/blogs">
        <p className="headerNav">BLOGS</p>
      </NavLink>
      <NavLink className="headerLink" to="/events">
        <p className = "headerNav">EVENTS</p>
      </NavLink> 
      <NavLink className="headerLink" to="/contact">
        <p className="headerNav">CONTACT</p>
      </NavLink>
    </div>

*/