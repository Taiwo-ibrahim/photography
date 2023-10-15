import React, {useEffect, useState} from 'react'
import "./carousel.css"

function carousels() {
  const data = [
    // {item1},"2","3","4"
    {
      "id": 1,
      "description": "image1",
      "image": "./item1.jpg"
    },
    {
      "id": 1,
      "description": "image2",
      "image": "./item2.jpg"
    },
    {
      "id": 1,
      "description": "image3",
      "image": "./item3.jpg"
    },
    {
      "id": 1,
      "description": "image4",
      "image": "./item4.jpg"
    },
    {
      "id": 1,
      "description": "image5",
      "image": "./item5.jpg"
    },
    {
      "id": 1,
      "description": "image6",
      "image": "./item6.jpg"
    },
    {
      "id": 1,
      "description": "image7",
      "image": "./item7.jpg"
    },
    {
      "id": 1,
      "description": "image8",
      "image": "./item8.jpg"
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselInfinityScroll = () => {
    if(currentIndex === data.length-1) {
      return setCurrentIndex(currentIndex)
    }else if(currentIndex === data.length-1) {
      return setCurrentIndex(0)
    }
    return setCurrentIndex( currentIndex+1)
  }

  useEffect(() => {
    const interval = setInterval(()=> {carouselInfinityScroll()}, 3000)
    return () => clearInterval(interval)
  })

  return (
    <div className='carousel-container'>
      {data.map((item, index)=> {
        return <img className='carousel-item' src={item.image} alt={item.description}
          style={{transform: `translate(-${currentIndex * 100}%)`}}
          key={index} ></img>
      })}
    </div>
  )

  // return (
  //   <div className='carousel-container'>
  //     <div className='carousel-item'>
  //       <h1>item1</h1>
  //     </div>
  //     <div className='carousel-item'>
  //       <h1>item2</h1>
  //     </div>
  //     <div className='carousel-item'>
  //       <h1>item3</h1>
  //     </div>
  //   </div>
  // )
}

export default carousels