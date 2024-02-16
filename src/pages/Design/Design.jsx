import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import Card2 from '../../Components/Card2/Card2'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import { Helmet } from 'react-helmet-async'
import './Design.css'

function Design() {
  const [toggleGallery, setToggleGallery]  = useState(false)
  const navigate = useNavigate()


  const designData = [
    {
      idf: 1,
      images: "/design1.png"
    },
    {
      idf: 2,
      images: "/design2.png"
    },
    {
      idf: 3,
      images: "/design3.png"
    },
    {
      idf: 4,
      images: "/design4.png"
    },
    {
      idf: 5,
      images: "/design5.png"
    },
    {
      idf: 6,
      images: "/design6.png"
    },
  ]

  return (
    <>
      <Helmet>
        <title>design page</title>
        <meta name='description' content='design portfolio page for magawtf' />
        <link href='/works/design' rel='canonical' />
      </Helmet>

      <div className='design__big-container'>
        <div>
          <Navbar />
        </div>
        <div className={toggleGallery? 'design-container hide' : "design-container"}>
          <div className='design__container'>
            <div className='name-container'>
              <p>fashion design</p>
            </div>
            <div className='design__container-right'>
              {designData.map((item) => {
                return (
                <div key={item.idf} onClick={() => navigate(`/works/design/${item.idf}`)} className="design__container-right_card">
                  <Card2 card2Img={item.images}/>
                </div>
                )
              })}
            </div>
          </div>

          <div className='design__container-footer'>
            <Footer />
          </div>
        </div>


      </div>
    </>

  )
}

export default Design

     