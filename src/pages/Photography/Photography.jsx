import React from 'react'
import Card from '../../Components/Card/Card'
import Footer from '../../Components/Footer/Footer'
import './Photography.css'
import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'

function Photography() {
  const [gallery , setGallery] = useState(false)
  const [galleryStyle, setGalleryStyle] = useState(false)

  function handlegallery() {
    setGallery(!gallery)
  }
  function handlegallerystyle() {
    setGalleryStyle(!galleryStyle)
  }

  const data = [
    {
      image: "/photography1.png",
      label: "benita and jessica"
    },
    {
      image: "/photography2.png",
      label: "cam dem 2023"
    },
    {
      image: "/photography3.png",
      label: "debby haastrup"
    },
    {
      image: "/photography4.png",
      label: "dj tiz and sarah"
    },
    {
      image: "/photography5.png",
      label: "till day break 2023"
    },
    {
      image: "/photography6.png",
      label: "strawberry potato"
    },
    {
      image: "/photography7.png",
      label: "sammi and tide"
    },
    {
      image: "/photography8.png",
      label: "santi event"
    },
    {
      image: "/photography9.png",
      label: "sara maratie"
    },
    {
      image: "/photography10.png",
      label: "shiny bobo"
    },
    {
      image: "/photography11.png",
      label: "slick imposa"
    },
    {
      image: "/photography12.png",
      label: "samantha 2023"
    },
    {
      image: "/photography13.png",
      label: "rema concert 2023"
    },
    {
      image: "/photography14.png",
      label: "one take dan"
    },
    {
      image: "/photography15.png",
      label: "hyde park"
    },
    {
      image: "/photography16.png",
      label: "angelique 2022"
    },
  ]


  return (
    <div className='photography__big-container'>
      <div>
        <Navbar />
      </div>


      <div className={gallery ? 'photography-container hide': "photography-container"}>
        <div className='photography__container'>
          <div className='photography__container-left'>
            <Card />
          </div>
          <div className='photography__container-right'>
            {data.map((item) => (
              <div className='photography__container-right_items'>
                <img src={item.image} />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className='photography__container-footer'>
          <Footer />
        </div>
      </div>


      {/* {gallery && 
        <div className='photography__gallery'>
          <div className='photography__gallery-nav'>
            <div className='gallery-back'>
            <img onClick={handlegallery} src="/arrowback.png" alt="" />
            </div>
            <div onClick={handlegallerystyle} className='gallery-style'>
              <img  src={ galleryStyle? "/galleryrow.png" : "/gallerycolumn.png"} alt="" />
            </div>
          </div>
          <div className={galleryStyle?'photgraphy__gallery-bottom': "what?" }>
            <div className='top__gallery-section_img'>
              <img src='/galleryTop.png' alt="" />
            </div>
            <div className={galleryStyle? "photgraphy__gallery-image1_row purple" : 'photography__gallery-image1 purple'}>
              <img src="/photography4.png" alt="" />
            </div>
            <div className={galleryStyle? "photgraphy__gallery-image1_row purple": 'photography__gallery-image1 green' }>
              <img src="/photography3.png" alt="" />
            </div>
            <div className={galleryStyle? "photgraphy__gallery-image1_row green" : 'photography__gallery-image1 purple'}>
              <img src="/photography2.png" alt="" />
            </div>
            <div className={galleryStyle? "photgraphy__gallery-image1_row green": 'photography__gallery-image1 green' }>
              <img src="/photography1.png" alt="" />
            </div>
          </div>
        </div>
      } */}

    </div>
  )
}

export default Photography