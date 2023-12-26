import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams, useNavigate} from 'react-router-dom'
import './InnerArt.css'
import { innerData } from './InnerArtData'

export default function InnerArt () {
  const { id } = useParams();
  const [data, setData] = useState();
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  function handleOpen() {
    setOpen(!open)
  }

  useEffect(() => {  
    const newData = innerData.filter((item) => item.id == id);
    setData(newData);
  }, [id, innerData]);
  
  
  console.log(data)
  return (
    <div className='innerArt__container'>
      <div className='innerArt__container-topnav'>
        <Link to="/works/art" >
          <img className='topnav-image' src="/arrowback.png" alt="" />
        </Link>
        <div onClick={handleOpen}>
          <img className='topnav-image' onClick={handleOpen} src={open? "/gallerycolumn.png": "/galleryrow.png"} alt="" />
        </div>
      </div>
      <div className={open? "innerArt__container-row" : 'innerArt__container-images'}>
        {data?.map(item => {
          return (
            <div className='innerArt-container'>
              {item.images.map(image => {
                return(
                  <div className={open?  "innerArt__container-row_images-container": 'innerArt__container-images_container'}>
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