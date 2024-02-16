import React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './Landing.css'

function Landing() {
  return (
    <>
      <Helmet>
        <title>home page</title>
        <meta name="description" content="landing page for magawtf art, styling, design, photography, portfoliio website"/>
        <link rel='canonical' href='/' />
      </Helmet>

      <div className='landing__container'>
        {/* <video width="320" height="240" autoplay >
          <source src="flairFashionWeek.mp4" type="video/mp4" />
        </video> */}
        <Navbar />
        <div className='landing__container-top'>
          <video controls autoPlay loop>
            <source src="flairFashionWeek.mp4" type="video/mp4" ></source>
          </video>
          {/* <img src="/home_img1.png" alt="" /> */}
        </div>
        <div className='landing__container-bottom'>
          <div className='landing__container2'>
            <div className='landing__container-images'>
              <NavLink to="/works"><img className='landing__images' src="/home_img2.png" alt="" /></NavLink>
            </div>
            <div  className='landing__container-images'>
              <NavLink to="/works"><img className='landing__images' src="/home_img3.png" alt="" /></NavLink>
            </div>
            <div  className='landing__container-images'>
              <NavLink to="/works"><img className='landing__images' src="/home_img4.png" alt="" /></NavLink>
            </div>
            <div  className='landing__container-images'>
              <NavLink to="/works"><img className='landing__images' src="/home_img5.png" alt="" /></NavLink>
            </div>
          </div>
        </div>

        <div className='landing__container-footer'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Landing