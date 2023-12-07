import React, {useState} from 'react'
import Card from '../../Components/Card/Card'
import Card2 from '../../Components/Card2/Card2'
import Footer from '../../Components/Footer/Footer'
import './Styling.css'

function Styling() {
  const [styling, setStyling] = useState(false)

  function handleStyling() {
    setStyling(!styling)
  }

  const [galleryStyle, setGalleryStyle] = useState(false)
  function handleGallery() {
    setGalleryStyle(!galleryStyle)
  }


  return (
    <div className='styling-container'>
      <div className={styling? 'styling__container hide' : "styling__container" }>
        <div className='styling__container-left'>
          <Card />
        </div>
        <div className='styling__container-right'>
          <div onClick={handleStyling}>
            <Card2 card2Img="/styling1.png" />
          </div>
          <div onClick={handleStyling}>
            <Card2 card2Img="/styling2.png" />
          </div>
          <div onClick={handleStyling}>
            <Card2 card2Img="/styling3.png" />
          </div>
          <div onClick={handleStyling}>
            <Card2 card2Img="/styling4.png" />
          </div>
          <div onClick={handleStyling}>
            <Card2 card2Img="/styling5.png" />
          </div>
          <div onClick={handleStyling}>
            <Card2 card2Img="/styling6.png" />
          </div>
        </div>
        <div className='styling__container-footer'>
          <Footer />
        </div>
      </div>



      <div className={styling? 'styling__gallery':  "styling__gallery hide"}>
        <div className='styling__gallery-nav'>
          <div onClick={handleStyling}>
            <img src="/arrowback.png" alt="" />
          </div>
          <div onClick={handleGallery}>
            <img src={galleryStyle? "/galleryrow.png" : "/gallerycolumn.png" } alt="" />
          </div>
        </div>

        <div className={galleryStyle? "styling__gallery-body_row purple" : 'styling__gallery-body'}>
          <div className='top__gallery-section_img'>
             <img src='/galleryTop.png' alt="" />
          </div>
          <div className={galleryStyle? "styling__gallery-body_card-row purple" : 'styling__gallery-body_card purple'}>
            <div className='styling__gallery-card'>
              <Card2 card2Img="/styling1.png" />
            </div>
          </div>
          <div className={galleryStyle? "styling__gallery-body_card-row purple" : 'styling__gallery-body_card green'}>
            <div className='styling__gallery-card'>
              <Card2 card2Img="/styling2.png" />
            </div>
          </div>
          <div className={galleryStyle? "styling__gallery-body_card-row green" : 'styling__gallery-body_card purple'}>
            <div className='styling__gallery-card'>
              <Card2 card2Img="/styling3.png" />
            </div>
          </div>
          <div className={galleryStyle? "styling__gallery-body_card-row green" : 'styling__gallery-body_card green'}>
            <div className='styling__gallery-card'>
              <Card2 card2Img="/styling4.png" />
            </div>
          </div>
          <div className={galleryStyle? "styling__gallery-body_card-row purple" : 'styling__gallery-body_card purple'}>
            <div className='styling__gallery-card'>
              <Card2 card2Img="/styling5.png" />
            </div>
          </div>
          <div className={galleryStyle? "styling__gallery-body_card-row purple" : 'styling__gallery-body_card green'}>
            <div className='styling__gallery-card'>
              <Card2 card2Img="/styling6.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Styling