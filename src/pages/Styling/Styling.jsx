import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import Card2 from '../../Components/Card2/Card2'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './Styling.css'

function Styling() {
  const [styling, setStyling] = useState(false)
  const navigate = useNavigate()

  const styleData = [
    {
      ids: 1,
      imageSrc: "/styling1.png"
    },
    {
      ids: 2,
      imageSrc: "/styling2.png"
    },
    {
      ids: 3,
      imageSrc: "/styling3.png"
    },
    {
      ids: 4,
      imageSrc: "/styling4.png"
    },
    {
      ids: 5,
      imageSrc: "/styling5.png"
    },
    {
      ids: 6,
      imageSrc: "/styling6.png"
    },
    {
      ids: 7,
      imageSrc: "/styling7.png"
    },
    {
      ids: 8,
      imageSrc: "/styling8.png"
    },
    {
      ids: 9,
      imageSrc: "/styling9.png"
    },
    {
      ids: 10,
      imageSrc: "/styling10.png"
    },
    {
      ids: 11,
      imageSrc: "/styling11.png"
    },
    {
      ids: 12,
      imageSrc: "/styling12.png"
    },
    {
      ids: 13,
      imageSrc: "/styling13.png"
    },
    {
      ids: 14,
      imageSrc: "/styling14.png"
    }
  ]

  return (
    <div className='styling-container'>
      <div>
        <Navbar />
      </div>
      <div className="styling__container">
        
        <div className='styling__container-left'>
          <Card />
        </div>
        <div className='styling__container-right'>
          
          {styleData.map((item) => {
            return(
              <div key={item.ids} onClick={() => navigate(`/works/styling/${item.ids}`)} className="styling__container-right_card">
                <Card2 card2Img={item.imageSrc} />
              </div>
            )
          })}
        </div>
        <div className='styling__container-footer'>
          <Footer />
        </div>
      </div>



    </div>
  )
}

export default Styling
