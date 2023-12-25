import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import "./InnerStyle.css"
import { innerStyleData } from "./InnerStyling"


export default function InnerStyle() {
  const { ids } = useParams();
  const [styleData, setStyleData] = useState();
  const [styleOpen, setStyleOpen] = useState(false)
  

  useEffect(() => {  
    const newStyleData = innerStyleData.filter((item) => item.ids == ids);
    setStyleData(newStyleData);
  }, [ids, innerStyleData]);
  
  
  function handleStyleOpen() {
    setStyleOpen(!styleOpen)
  }

  console.log(styleData)
  return (
    <div className='innerArt__container'>
      <div className='innerArt__container-topnav'>
        <Link to="/works">
          <img  src="/arrowback.png" alt="" />
        </Link>
        <div onClick={handleStyleOpen}>
          <img  src={styleOpen? "/gallerycolumn.png": "/galleryrow.png"} alt="" />
        </div>
      </div>

      <div className={styleOpen? "innerArt__container-row" : 'innerArt__container-images'}>
        {styleData?.map(item => {
          return (
            <div className="innerArt-container">
              {item.images.map(image => {
                return(
                  <div className={styleOpen?  "innerArt__container-row_images-container": 'innerArt__container-images_container'}>
                    <img  src={image} alt='image' />
                  </div>
                )
              })}
            </div>
          )
        })}
        
      </div>
    </div>
  )

}