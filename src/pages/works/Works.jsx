import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import WorksComp from '../../Components/WorksComp/WorksComp'
import './Works.css'
import { Helmet } from 'react-helmet-async'

function Works() {

  const [changed, setChanged] = useState(true)


    function handleChange() {
      return setChanged(false)
    }

  

  return (
    <>
      <Helmet>
        <title>works page</title>
        <meta name='description' content='portflio works page for magawtf' />
        <link href='/works' rel='canonical' />
      </Helmet>
      <div className='workspage__container'>
        <div className='workspage__container-navbar'>
          <Navbar />
        </div>
        <div onClick={handleChange}>
          {changed && < WorksComp />}
        </div>


      {changed == false && <Outlet /> }
      </div>
    </>
  )
}

export default Works