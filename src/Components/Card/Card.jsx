import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Card.css"

function Card() {
   
  const navigate = useNavigate()
  function toPhoto() {
    return navigate("/photgraphy");
  }

  
  return (
    <div className='card__container'>
      <NavLink to="../works/photography" className="card">
        <p className='worksText'>photography</p>
        <img className='worksCard' src="/photoCard.png" alt="" />
      </NavLink>
      <NavLink to="../works/styling" className="card">
        <p>styling</p>
        <img className='worksCard' src="/styleCard.png" alt="" />
      </NavLink>
      <NavLink to="../works/art" className="card">
        <p>art</p>
        <img className='worksCard' src="/artCard.png" alt="" />
      </NavLink>
      <NavLink to="../works/design" className="card">
        <p>fashion design</p>
        <img className='worksCard' src="/designCard.png" alt="" />
      </NavLink>
    </div>
  )
}

export default Card