import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './Copyright.css'
import { Helmet } from 'react-helmet-async'

function Copyright() {
  return (
    <>
      <Helmet>
        <title>copyright page</title>
        <meta name='description' content='copyrights page for magawtf' />
        <link href='/copyright' rel='canonical' />
      </Helmet>

      <div className='copyright__container'>
        <div className='copyright__container-navbar'>
          <Navbar />
        </div>
        <div className='copyright__container-text'>
          <h1>copyright information</h1>
          <p>
            <span>
            all content on this website, including but not limited to text, graphics, logos, images, and videos, is the property of magawtf and is protected by uk and international copyright laws. any unauthorized use or reproduction of this content is strictly prohibited and may result in legal action.
            </span>
            <span>
            magawtf reserves all rights to its intellectual property, including its brand identity, creative services, and any original work produced for clients. no part of this website or any materials provided by magawtf may be used, reproduced, or distributed without prior written permission.
            </span>
            <span>
              if you believe that any content on this website infringes your copyright or other intellectual property rights, please contact us immediately at contact@magawtf.com
            </span>
            
          </p>
        </div>
        <div className='copyright__container-footer'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Copyright