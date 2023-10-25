import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar__container'>
      <NavLink  to="/" ><img className="home-img" src="/magawtfLogo.png" alt="top-logo"/></NavLink>
      <div className='navbar__container-links'>
        <NavLink className="nav-link" to="/">home</NavLink>
        <NavLink className="nav-link" to="/my-works">my works</NavLink>
        <NavLink className="nav-link" to="/about-me">about me</NavLink>
        <NavLink className="nav-link" to="/press">press</NavLink>
        <NavLink className="nav-link" to="/contact-me">contact me</NavLink>
      </div>
    </div>
  )
}

export default Navbar