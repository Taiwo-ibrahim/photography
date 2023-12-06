import React from "react"
import PropTypes from "prop-types"

const YoutubeEmbed = ({embedId}) => (
  <div>
    <iframe 
      width="100%"
      height="400"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-pictured"
      allowfullscreen
      title="Embed youtube video"
    />
  </div>
)

YoutubeEmbed.PropTypes = {
  embedId:PropTypes.string.isRequired
}

export default YoutubeEmbed