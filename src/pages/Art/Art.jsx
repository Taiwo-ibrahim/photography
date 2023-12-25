import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import Card2 from '../../Components/Card2/Card2'
import Footer from '../../Components/Footer/Footer'
import './Art.css'

function Art() {
  const [artToggle, setArtToggle] = useState(false)
  const [artGalleryToggle, setArtGalleryToggle] = useState(false)
  const navigate = useNavigate()


  const artData = [
    {
      id:  1,
      image: "/art6.png"
    },
    {
      id: 2,
      image: "/art5.png"
    },
    {
      id: 3,
      image: "/art4.png"
    },
    {
      id: 4,
      image: "/art3.png"
    },
    {
      id: 5,
      image: "/art2.png"
    },
    {
      id: 6,
      image: "/art1.png"
    }
  ]

  function artGallery() {
    setArtToggle(!artToggle);
  }

  // const { id } = useParams()
  
  function artGallerToggle() {
    setArtGalleryToggle(!artGalleryToggle)
  }

  return (
    <div className='art-big_container'>
      <div className="art-container" >
        <div className='art__container'>
          <div className='art__container-left'>
            <Card />
          </div>
          <div className='art__container-right'>
            
            {artData.map((item) => {
              return(
              <div key={item.id} onClick={() => navigate(`/works/art/${item.id}`)} className='art__container-card2_container'>
               <Card2 card2Img={item.image}/>
              </div>
              )
            })}
          </div>
        </div>

        <div className='art__container-footer'>
          <Footer />
        </div>
      </div>


    </div>
  )
}

export default Art



{/* {artToggle && 

  <div className='art-container-gallery'>
    <div className='photography__gallery-nav'>
      <div onClick={artGallery} className='gallery-back'>
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
} */}