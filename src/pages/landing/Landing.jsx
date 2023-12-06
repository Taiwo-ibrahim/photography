import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import "./Landing.css"

function Landing() {
  return (
    <div className='landing__container'>
      <Navbar />
      <div className='landing__container-top'>
        <img src="/home_img1.png" alt="" />
      </div>
      <div className='landing__container-bottom'>
        <div className='landing__container2'>
          <div className='landing__container-images'>
            <img  src="/home_img2.png" alt="" />
            <p>photgraphy</p>
          </div>
          <div  className='landing__container-images'>
            <img  src="/home_img3.png" alt="" />
            <p>styling</p>
          </div>
          <div  className='landing__container-images'>
            <img  src="/home_img4.png" alt="" />
            <p>art direction</p>   
          </div>
          <div  className='landing__container-images'>
            <img  src="/home_img5.png" alt="" />
            <p>fashion design</p>
          </div>
        </div>
      </div>

      <div className='landing__container-footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Landing