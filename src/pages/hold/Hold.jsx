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
        <h3>it will be ready when its ready</h3>
        <p>we are down for now because the full webste is not ready so i hope this page is enough to hold you on before the original thing lands</p>
        <button>contact</button>
      </div>
    </div>
  )
}

export default Hold