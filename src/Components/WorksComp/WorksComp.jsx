import React from 'react'
import { NavLink } from 'react-router-dom'
import "./WorksComp.css"

function WorksComp() {
  return (
    <div className='workscomp__container'>
      <NavLink to="photography" className='workscomp__container-images'>
        <img  src="/home_img2.png" alt="" />
      </NavLink>
      <NavLink to="styling" className='workscomp__container-images'>
        <img  src="/home_img3.png" alt="" />
      </NavLink>
      <NavLink to="art" className='workscomp__container-images'>
        <img  src="/home_img4.png" alt="" />
      </NavLink>
      <NavLink to="design" className='workscomp__container-images'>
        <img  src="/home_img5.png" alt="" />
      </NavLink>
    </div>
  )
}

export default WorksComp