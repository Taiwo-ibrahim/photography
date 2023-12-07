import React, {useState} from 'react'
import Card from '../../Components/Card/Card'
import Card2 from '../../Components/Card2/Card2'
import Footer from '../../Components/Footer/Footer'
import './Art.css'

function Art() {
  const [artToggle, setArtToggle] = useState(false)
  const [artGalleryToggle, setArtGalleryToggle] = useState(false)


  function artGallery() {
    setArtToggle(!artToggle);
  }
  
  function artGallerToggle() {
    setArtGalleryToggle(!artGalleryToggle)
  }

  return (
    <div className='art-big_container'>
      <div className={artToggle? 'art-container hide': "art-container"} >
        <div className='art__container'>
          <div className='art__container-left'>
            <Card />
          </div>
          <div className='art__container-right'>
            <div onClick={artGallery} className='art__container-card2_container'>
              <Card2 card2Img="/art6.png"/>
            </div>
            <div onClick={artGallery} className='art__container-card2_container'>
              <Card2 card2Img="/art5.png"/>
            </div>
            <div onClick={artGallery} className='art__container-card2_container'>
              <Card2 card2Img="/art4.png"/>
            </div>
            <div onClick={artGallery} className='art__container-card2_container'>
              <Card2 card2Img="/art3.png"/>
            </div>
            <div onClick={artGallery} className='art__container-card2_container'>
              <Card2 card2Img="/art2.png"/>
            </div>
            <div onClick={artGallery}  className='art__container-card2_container'>
              <Card2 card2Img="/art1.png"/>
            </div>
          </div>
        </div>

        <div className='art__container-footer'>
          <Footer />
        </div>
      </div>


      {artToggle && 
      
        <div className='art-container-gallery'>
          <div className='photography__gallery-nav'>
            <div onClick={artGallery} className='gallery-back'>
              <img src="/arrowback.png" alt="" />
            </div> 
            <div onClick={artGallerToggle} className='gallery-style'>
              <img  src={artGalleryToggle? "/galleryrow.png" : "/gallerycolumn.png" }  alt="" />
            </div>
          </div>
          <div className='top__gallery-section_img'>
           <img src='/galleryTop.png' alt="" />
          </div>
          <div className={artGalleryToggle?  "art__container-gallery-row" : 'art__container-gallery_body' }>
            <div className={artGalleryToggle? "art_gallery-card_row purple" : "art_gallery-card purple"}>
              <div className='art_card-container'>
                <Card2  card2Img="/art6.png"/>
              </div>
            </div>
            <div className={artGalleryToggle? "art_gallery-card_row purple" : "art_gallery-card green"}>
              <div className='art_card-container'>
                <Card2  card2Img="/art5.png"/>
              </div>
            </div>
            <div className={artGalleryToggle? "art_gallery-card_row green" : "art_gallery-card purple"}>
              <div className='art_card-container'>
                <Card2  card2Img="/art4.png"/>
              </div>
            </div>
            <div className={artGalleryToggle? "art_gallery-card_row green" : "art_gallery-card green"}>
              <div className='art_card-container'>
                <Card2  card2Img="/art3.png"/>
              </div>
            </div>
            <div className={artGalleryToggle? "art_gallery-card_row purple" : "art_gallery-card purple"}>
              <div className='art_card-container'>
                <Card2  card2Img="/art2.png"/>
              </div>
            </div>
            <div className={artGalleryToggle? "art_gallery-card_row purple" : "art_gallery-card green"}>
              <div className='art_card-container'>
                <Card2  card2Img="/art1.png"/>
              </div>
            </div>
            
          </div>
        </div>
      }
    </div>
  )
}

export default Art