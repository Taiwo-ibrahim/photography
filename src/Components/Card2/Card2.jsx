import React from 'react'
import "./Card2.css"

function Card2(props) {
  return (
    <div className='card2__container'>
      <img src={props.card2Img} alt="" />
    </div>
  )
}

export default Card2