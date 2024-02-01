import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import Card2 from '../../Components/Card2/Card2'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
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
    },
    {
      id: 7,
      image: "/art7.png"
    },
    {
      id: 8,
      image: "/art8.png"
    },
  ]


  return (
    <div className='art-big_container'>
      <div className='art__container-navbar'>
        <Navbar />
      </div>
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


