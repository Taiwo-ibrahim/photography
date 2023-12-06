import React from 'react'
import Card from '../../Components/Card/Card'
import Footer from '../../Components/Footer/Footer'
import "./Photography.css"
import { useState } from 'react'

function Photography() {
  const [gallery , setGallery] = useState(false)
  const [galleryStyle, setGalleryStyle] = useState(false)

  function handlegallery() {
    setGallery(!gallery)
  }
  function handlegallerystyle() {
    setGalleryStyle(!galleryStyle)
  }
  


  return (
    <div className='photography__big-container'>
      <div className={gallery ? 'photography-container hide': "photography-container"}>
        <div className='photography__container'>
          <div className='photography__container-left'>
            <Card />
          </div>
          <div className='photography__container-right'>
            <img onClick={handlegallery} src="/photography4.png" alt="" />
            <p>Polaroid maga</p>
            <img onClick={handlegallery} src="/photography3.png" alt="" />
            <p>Lauren jemes</p>
            <img onClick={handlegallery} src="/photography2.png" alt="" />
            <p>Lauren jemes</p>
            <img onClick={handlegallery} src="/photography1.png" alt="" />
          </div>
        </div>
        
        <div className='photography__container-footer'>
          <Footer />
        </div>
      </div>


      {gallery && 
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
      }

    </div>
  )
}

export default Photography