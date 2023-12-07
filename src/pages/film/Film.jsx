import React from 'react'
// import PropTypes from "prop-types"
import Navbar from '../../Components/Navbar/Navbar'
import './Film.css'
import YoutubeEmbed from '../../Components/YoutubeEmbed/YoutubeEmbed'

function Film() {
  return (
    <div className='Film__container'>
      <Navbar />

      <div className='video-responsive'>
        <YoutubeEmbed embedId="X-9K1u4F4X8" />
      </div>
    </div>
  )
}
// 
export default Film