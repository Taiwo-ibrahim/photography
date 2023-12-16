import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import  './Contact.css'

function Contact() {
  return (
    <div className='contact__container'>
      <div className='contact__container-navbar'>
        <Navbar />
      </div>
      <div className='contact__container-form_container'>
        <div className='contact__container-form_text'>
          <p>Have a project in mind?</p>
          <h1>fill in the form to make enquiries</h1>
          <div className='contact__container-form_text_images'>
            <img src="/Twitter.png" alt="" />
            <img src="/instagram.png" alt="" />
          </div>
        </div>
        <div className='contact__container-form'>
          <form className='contact-form'>
            <div className='contact-form-top'>
              <div className='contact-form-top-left'>
                <p>name</p>
                <input type="text"></input>
              </div>
              <div className='contact-form-top-left'>
                <p>email</p>
                <input type="email"></input>
              </div>
            </div>
            <div className='contact-form-middle'>
              <p>subject</p>
              <input type="text"></input>
            </div>
            <div className='contact-form-middle'>
              <p>message</p>
              <input type="text" name="" id="" />
            </div>
            <button type="submit">send message</button>
          </form>
        </div>
      </div>

      <div className='contact__container-footer'>
        <Footer />
      </div>
    </div>
  ) 
}

export default Contact