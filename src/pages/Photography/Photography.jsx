import React from 'react'
import Footer from '../../Components/Footer/Footer'
import './Photography.css'
import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Helmet } from 'react-helmet-async'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Photography() {
  const [gallery , setGallery] = useState(false)
  const [galleryStyle, setGalleryStyle] = useState(false)

  function handlegallery() {
    setGallery(!gallery)
  }
  function handlegallerystyle() {
    setGalleryStyle(!galleryStyle)
  }



  const data = [
    {
      image: "/photography1.png",
      label: "/photography2.png"
    },
    {
      image: "/photography3.png",
      label: "/photography4.png"
    },
    {
      image: "/photography5.png",
      label: "/photography6.png"
    },
    {
      image: "/photography7.png",
      label: "/photography8.png"
    },
    {
      image: "/photography9.png",
      label: "/photography10.png"
    },
    {
      image: "/photography11.png",
      label: "/photography12.png"
    },
    {
      image: "/photography13.png",
      label: "/photography14.png"
    },
    {
      image: "/photography15.png",
      label: "/photography16.png"
    },
    {
      image: "/photography17.png",
      label: "/photography18.png"
    },
    {
      image: "/photography19.png",
      label: "/photography20.png"
    },
    {
      image: "/photography21.png",
      label: "/photography22.png"
    },
    {
      image: "/photography23.png",
      label: "/photography24.png"
    },
    {
      image: "/photography25.png",
      label: "/photography26.png"
    },
    {
      image: "/photography27.png",
      label: "/photography28.png"
    },
    {
      image: "/photography29.png",
      label: "/photography30.png"
    },
    {
      image: "/photography31.png",
      label: "/photography32.png"
    },
    {
      image: "/photography33.png",
      label: "/photography34.png"
    },
    {
      image: "/photography35.png",
      label: "/photography36.png"
    },
    {
      image: "/photography37.png",
      label: "/photography38.png"
    },
    {
      image: "/photography39.png",
      label: "/photography40.png"
    },
    {
      image: "/photography41.png",
      label: "/photography42.png"
    },
    {
      image: "/photography43.png",
      label: "/photography44.png"
    },
    {
      image: "/photography45.png",
      label: "/photography46.png"
    },
  ]


  return (
    <>
      <Helmet>
        <title>photography page</title>
        <meta name="description" content="photography portfolio page for magawtf"/>
        <link rel='canonical' href='/works/photography' />
      </Helmet>

      <div className='photography__big-container'>
        <div>
          <Navbar />
        </div>


        <div className={gallery ? 'photography-container hide': "photography-container"}>
          <div className='photography__container'>
            <div className='name-container'>
              <p>photography</p>
            </div>
            <Carousel autoFocus interval={1000} infiniteLoop className='carousel'>

                {data.map((image) => (
                  <div className='photography__container-right_items'>
                    <img src={image.image} alt="" />
                    <img src={image.label} alt="" />
                  </div>
                ))}
            </Carousel>
           
          </div>
          
          <div className='photography__container-footer'>
            <Footer />
          </div>
        </div>


      </div>
    </>
  )
}

export default Photography