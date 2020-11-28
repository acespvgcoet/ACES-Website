import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'
function Header() {
  return (

    <div className="header">
      <Link className = "headerLink" to = "/">
        <p>HOME</p>
      </Link>
      <Link className = "headerLink" to = "/teams">
        <p>TEAM</p>
      </Link>
      
        <p>SUBMIT IDEA</p>
      
      <Link className = "headerLink" to = "/contact">
        <p>CONTACT</p>
      </Link>
      
    </div>

  )
}

export default Header