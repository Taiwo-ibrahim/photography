import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import WorksComp from '../../Components/WorksComp/WorksComp'
import './Works.css'

function Works() {

  const [changed, setChanged] = useState(true)

  function handleChange() {
    return setChanged(false)
  }

  return (
    <div className='workspage__container'>
      <div className='workspage__container-navbar'>
        <Navbar />
      </div>
      <div onClick={handleChange}>
        {changed && < WorksComp />}
      </div>


     {changed == false && <Outlet /> }
    </div>
  )
}

export default Works