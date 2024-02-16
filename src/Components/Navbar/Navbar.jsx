import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  const [toggled, setToggled] = useState(false)

  function handleClick() {
    setToggled(!toggled)
  }
  
  function refresh() {
    location.reload()
  }

  return (
    <div>
      <div className='navbar__container'>
        <NavLink  to="/" ><img className="home-img" src="/logo.png" alt="top-logoo"/></NavLink>
        <NavLink  to="/" ><img className="home-img-2" src="/logo.png" alt="top-logo"/></NavLink>
        <div className='navbar__container-links'>
          <NavLink className="nav-link" to="/">home</NavLink>
          <NavLink className="nav-link" to="/works">works</NavLink>
          <NavLink className="nav-link" to="/about">about</NavLink>
          <NavLink className="nav-link" to="/press">press</NavLink>
          <NavLink className="nav-link" to="/contact">contact me</NavLink>
        </div>
      </div>
    
      <div className='navbar__container-media_query'>
        <div className='hamburger__container' onClick={handleClick}>
          <img  src="/hamburger.png" alt="" />
        </div>
        <div className='media_query-nav_img-container'>
          <NavLink  to="/" ><img className="media_query-nav_img" src="/magawtfLogo.svg" alt="top-logo"/></NavLink>
        </div>
      </div>

      {toggled && 
        <div className='navbar__container-nav_links-hamburger'>
          <div className='cancle__container' onClick={handleClick}>
            <img src="/cancle.png"  alt="" />
          </div>
          <div className='navbar__container-nav_links-hamburger_links'>
            <NavLink className="nav-link2" to="/">home</NavLink>
            <NavLink className="nav-link2" to="/works">my works</NavLink>
            <NavLink className="nav-link2" to="/about">about me</NavLink>
            <NavLink className="nav-link2" to="/press">press</NavLink>
            <NavLink className="nav-link2" to="/contact">contact me</NavLink>
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar