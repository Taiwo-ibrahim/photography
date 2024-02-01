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
            <span>
            I am Maga Halilu, also known as magawtf, a 23-year-old art director and stylist hailing from Nigeria. My journey into the world of fashion and art has been greatly influenced by the works of renowned filmmaker Wes Anderson and the photography of Gabriel Moses. These creative giants have inspired me to use my unique style as a means to make socio-political commentary.  
            </span>
            <span>
            While my work often delves into darker subject matter, I have a penchant for portraying these themes in a bright and pastel-toned aesthetic, creating a captivating contrast. My background is in engineering, where I achieved a solid 2:1 degree from the University of Derby. This engineering foundation provides me with a keen eye for precision and perfection in my work.  
            </span>
            <span>
            Unafraid to take risks and push the boundaries of traditional fashion, I specialize in unisex fashion and have a knack for pairing unexpected pieces to craft truly distinctive looks. I take great pride in my ability to bring out the best in my clients, regardless of their body type or preferences.
            </span>
            
            <span>
              
            In a short period of time since transitioning into the world of art direction and styling professionally, I've had the privilege of collaborating with notable brands such as LCC, FlairFashion, Moelogo, Capture One, and many others. My dedication to exceptional work etiquette and strong organizational skills has helped me establish a stellar reputation and a dedicated following
            </span>
          </p>
        </div>
       
      </div>
      <Footer />
    </div>
  )
}

export default About