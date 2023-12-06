import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer__container'>
      <div className='footer__container-top'>
        <div className='footer__container-top_right'>
          <img src='/Twitter.png' alt="twitter" />
          <img src='/instagram.png' alt="instagram" />
        </div>
        <img src='/magawtfLogo.png' className='footer__center-logo' alt='' />
        <div className='footer__container-top_left'>
          <p>emiladdress@gmail.com</p>
          <h1>07065323456</h1>
        </div>
      </div>

      <div className='footer__container-bottom'>
        <div className='footer__container-bottom_links'>
          <NavLink className="footer-link-left" to="/faq">FAQs</NavLink>
          <div className='footer__container-bottom_links-right'>
            <NavLink className="footer-link" to="/privacy">Privacy policy</NavLink>
            <NavLink className="footer-link" to="/copyright">copyright information</NavLink>
          </div>
        </div>
      </div>

      <div className='footer__container-media_query'>
        <img src='/magawtfLogo.png' className='footer__center-logo' alt='' />
        <NavLink className="footer-link-media" to="/faq">FAQs</NavLink>
        <NavLink className="footer-link-media" to="/privacy">Privacy policy</NavLink>
        <NavLink className="footer-link-media" to="/copyright">copyright information</NavLink>
        <p>emiladdress@gmail.com</p>
        <h1>07065323456</h1>
        <div className='footer__container-media_query-images'>
          <img src='/Twitter.png' alt="twitter" />
          <img src='/instagram.png' alt="instagram" />
        </div>

      </div>
    </div>
  )
}

export default Footer