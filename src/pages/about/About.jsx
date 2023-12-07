import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './About.css'

function About() {
  return (
    <div className='about__container'>
      <Navbar />
      <div className='about__container-body'>
        <div className='about__container-body_left'>
          <h2>about</h2>
          <p>
            magawtf is a creative service provided based london and abuja nigeria that specializes in styling, art direction, photography and fashion design. my mission is to bring our clients' creative visions to life in a unique and sustainable way. i believe that creativity should not come at the expense of our planet and are committed to practicing sustainable methods in our work. the brand identity is  colorful, dreamy, and inspired by a pastel-colored fictional realm. at magawtf, i value collaboration, creativity, and innovation, and we strive to create a fun and enjoyable experience for both our clients and team. <br />
            with my diverse range of services, i offer a holistic approach to creative projects, from concept to execution. my team of experienced and passionate collaborators are committed to bringing your vision to life, whether it's through our styling, art direction, photography or fashion design services. <br />
            thank you for considering magawtf for your creative needs. we look forward to collaborating with you and bringing your vision to life in a sustainable and playful wa
          </p>
        </div>
       
      </div>
      <Footer />
    </div>
  )
}

export default About