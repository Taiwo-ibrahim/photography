import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import Card2 from '../../Components/Card2/Card2'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './Design.css'

function Design() {
  const [toggleGallery, setToggleGallery]  = useState(false)
  const navigate = useNavigate()

  function handleToggle() {
    setToggleGallery(!toggleGallery)
  }

  const [galleryStyle, setGalleryStyle] = useState(false)
  function handleStyle() {
    setGalleryStyle(!galleryStyle)
  }

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
    <div className='design__big-container'>
      <div>
        <Navbar />
      </div>
      <div className={toggleGallery? 'design-container hide' : "design-container"}>
        <div className='design__container'>
          <div className='design__container-left'>
          <Card />
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

)
}

export default Design

      {/* <div className={toggleGallery? 'design__gallery ': "design__gallery hide" }>
        <div className='design__gallery-top_nav'>
          <div onClick={handleToggle} className='design__gallery-back'>
            <img src="/arrowback.png" alt="" />
          </div> 
          <div onClick={handleStyle} className='design__gallery-style-column'>
            <img  src={galleryStyle? "/galleryrow.png": "/gallerycolumn.png"}    alt="" />
          </div>
        </div>


        <div className={galleryStyle? "design__gallery-row" : 'design__gallery-column'}>
           <div className='top__gallery-section_img'>
              <img src='/galleryTop.png' alt="" />
            </div>
          <div className={galleryStyle? "design__gallery-card_container row purple"  : 'design__gallery-card_container purple'}>
            <div className='design__gallery-card'>
              <Card2 card2Img="/design1.png"/>
            </div>
          </div>
          <div className={galleryStyle? "design__gallery-card_container row purple" : 'design__gallery-card_container green'}>
            <div className='design__gallery-card'>
              <Card2 card2Img="/design2.png"/>
            </div>
          </div>
          <div className={galleryStyle? "design__gallery-card_container row green" : 'design__gallery-card_container purple'}>
            <div className='design__gallery-card'>
              <Card2 card2Img="/design3.png"/>
            </div>
          </div>
          <div className={galleryStyle? "design__gallery-card_container row green" : 'design__gallery-card_container green'} >
            <div className='design__gallery-card'>
              <Card2 card2Img="/design4.png"/>
            </div>
          </div>
          <div className={galleryStyle? "design__gallery-card_container row purple" : 'design__gallery-card_container purple'}>
            <div className='design__gallery-card'>
              <Card2 card2Img="/design5.png"/>
            </div>
          </div>
          <div className={galleryStyle? "design__gallery-card_container row purple" : 'design__gallery-card_container green'}>
            <div className='design__gallery-card'>
              <Card2 card2Img="/design6.png"/>
            </div>
          </div>
        </div>
      </div> */}