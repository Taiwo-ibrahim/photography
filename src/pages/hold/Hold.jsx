import React from 'react'
import Carousel from "../../Components/carousels/carousels"
import "./Hold.css"

function Hold() {
  return (
    <div className='holding__container'>
      <div className='holding__container-carousel'>
        <Carousel />
      </div>
      <div className='holding__container-content'>
        <img src= "/magawtfLogo.png" alt='logo' />
        <h3>full website coming soon...</h3>
      </div>
    </div>
  )
}

export default Hold