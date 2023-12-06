import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import "./Copyright.css"

function Copyright() {
  return (
    <div className='copyright__container'>
      <div className='copyright__container-navbar'>
        <Navbar />
      </div>
      <div className='copyright__container-text'>
        <h1>copyright information</h1>
        <p>
          all content on this website, including but not limited to text, graphics, logos, images, and videos, is the property of magawtf and is protected by uk and international copyright laws. any unauthorized use or reproduction of this content is strictly prohibited and may result in legal action.<br />
          magawtf reserves all rights to its intellectual property, including its brand identity, creative services, and any original work produced for clients. no part of this website or any materials provided by magawtf may be used, reproduced, or distributed without prior written permission.<br />
          if you believe that any content on this website infringes your copyright or other intellectual property rights, please contact us immediately at contact@magawtf.com
        </p>
      </div>
      <div className='copyright__container-footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Copyright