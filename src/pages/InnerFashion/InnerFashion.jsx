import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { innerFashionData } from "./InnerFashionData"


export default function InnerFashion() {
  const {idf} = useParams();
  const [fashionData, setFashionData] = useState();
  const [fashionOpen, setFashionOpen] = useState(false)

  function handleFashionOpen() {
    setFashionOpen(!fashionOpen)
  }

  useEffect(() => {  
    const newFashionData = innerFashionData.filter((item) => item.idf == idf);
    setFashionData(newFashionData);
  }, [idf, innerFashionData]);
  

  return (
    <div className='innerArt__container'>
      <div className='innerArt__container-topnav'>
        <Link to="/works/design">
          <img  src="/arrowback.png" alt="" />
        </Link>
        <div onClick={handleFashionOpen}>
          <img onClick={handleFashionOpen} src={fashionOpen? "/gallerycolumn.png": "/galleryrow.png"} alt="" />
        </div>
      </div>
      <div className={fashionOpen? "innerArt__container-row" : 'innerArt__container-images'}>
        {fashionData?.map(item => {
          return (
            <div className='innerArt-container'>
              {item.images.map(image => {
                return(
                  <div className={fashionOpen?  "innerArt__container-row_images-container": 'innerArt__container-images_container'}>
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