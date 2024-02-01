import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer__container'>
      <div className='footer__container-top'>
        <div className='footer__container-top_right'>
          <a className='twitter-1' href="https://x.com/bymagawtf?s=21" target="_blank"><img src='/Twitter.png' alt="twitter" /></a>
          <a className='twitter-1' href="https://instagram.com/magawhat.tf?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><img src='/instagram.png' alt="instagram" /></a>
        </div>
        <img src='/magawtfLogo.png' className='footer__center-logo' alt='' />
        <div className='footer__container-top_left'>
          <p>contact@magawtf.com</p>
          <h1></h1>
        </div>
      </div>

      <div className='footer__container-bottom'>
        <div className='footer__container-bottom_links'>
          <NavLink className="footer-link-left" to="/faq">faq</NavLink>
          <div className='footer__container-bottom_links-right'>
            <NavLink className="footer-link" to="/privacy">privacy policy</NavLink>
            <NavLink className="footer-link" to="/copyright">copyright information</NavLink>
          </div>
        </div>
      </div>

      <div className='footer__container-media_query'>
        <img src='/magawtfLogo.svg' className='footer__center-logo' alt='' />
        <NavLink className="footer-link-media" to="/faq">faq</NavLink>
        <NavLink className="footer-link-media" to="/privacy">privacy policy</NavLink>
        <NavLink className="footer-link-media" to="/copyright">copyright information</NavLink>
        <p>contact@magawtf.com</p>
        <h1></h1>
        <div className='footer__container-media_query-images'>
          <a className='twitter' href="https://x.com/bymagawtf?s=21" target="_blank"><img src='/Twitter.png' alt="twitter" /></a>
          <a className='twitter' href="https://instagram.com/magawhat.tf?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><img src='/instagram.png' alt="instagram" /></a>
          
        </div>

      </div>
    </div>
  )
}

export default Footer