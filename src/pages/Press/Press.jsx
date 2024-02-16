import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import "./Press.css"
import { Helmet } from 'react-helmet-async'

function Press() {

  const data = [
    {
      images: "/press1.png",
      link: "https://ghreact.com/housewives-of-the-realm-the-first-installation"
    },
    {
      images: "/press2.png",
      link: " https://yonkiabuja.com/posts/housewives-of-the-realm-by-stylist-and-art-director-magawtf"
    },
    {
      images: "/press3.png",
      link: " https://www.prazzleinc.com/prazzle-selects/housewives-of-the-realm"
    },
    {
      images: "/press4.png",
      link: "https://www.malvie.fr/post/housewives-of-the-realm"
    },
    {
      images: "/press5.png",
      link: "- http://www.darlingzine.com/2023/12/servants-of-realm-wes-anderson-inspired.html"
    },
    {
      images: "/press6.png",
      link: "https://iink.fashion.blog/giftacular-december/" 
    },
    {
      images: "/press7.png",
      link: "https://www.recklessmagazine.com/home/servants-of-the-realm"
    },
    {
      images: "/press8.png",
      link: " https://prazzleinc.com/prazzle-selects/ode-to-86"
    },
    {
      images: "/press9.jpg",
      link: "https://lonedesignclub.com/blogs/blog/magas-journey-from-stylist-to-creative-director-pioneering-sustainability-with-magazine-theclubfeels"
    },
    {
      images: "/press10.jpg",
      link: "https://www.getunruly.com/articles/the-realm-unveiled-an-artistic-exploration-of-societal-dichotomy"
    },
  ]


  return (
    <>
      <Helmet>
        <title>press page</title>
        <meta name="description" content="press page for magawtf containing featured post from other websites"/>
        <link rel='canonical' href='/press' />
      </Helmet>

      <div className="press__container">
        <div className='press__container-navbar'>
          <Navbar />
        </div>
        <div className='press__container-body'>
          {data.map((item) => (
            <a href={item.link} target="_blank" className='press__container-image_link'>
              <img src={item.images} />
            </a>
          ))}
        </div>
        <div className='press__container-footer'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Press