import React, { useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import  './Contact.css'
import { Helmet } from "react-helmet-async"
 
function Contact() {

  const[formState,setFormState] = useState({});

  

  const changeHandler = (event) => {
    setFormState({...formState, [event.target.name]: [event.target.value]})
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      // Username: "ibrahimtaiwoti@gmail.com",
      // Password: "2519C67B5FD5D884DE082DC11B8B71DE59D9",
      // Host: "smtp.elasticemail.com",
      // Port: 2525 ,
      SecureToken: "402aa846-91a7-45be-862f-fcb248641872",
      To : 'contact@magawtf.com',
      From : "ibrahimtaiwoti@gmail.com",
      Subject : "This is from the contact form",
      Body : `Name: ${formState.name}, Email: ${formState.email}, Subject: ${formState.subject} , Message: ${formState.message}`
    }

    if(window.Email) {
      window.Email.send(config).then(() => alert("email has be successfully sent"))
    }
  }

  return (
    <>
      <Helmet>
        <title>contact page</title>
        <meta name='description' content='contact page for magawtf' />
        <link href='/contact' rel='canonical' />
      </Helmet>

      <div className='contact__container'>
        <div className='contact__container-navbar'>
          <Navbar />
        </div>
        <div className='contact__container-form_container'>
          <div className='contact__container-form_text'>
            <p>have a project in mind?</p>
            <h1>fill in the form to make enquiries</h1>
            <div className='contact__container-form_text_images'>
              <a className='twitter' href="https://x.com/_magawtf?s=21" target="_blank"><img src='/Twitter.png' alt="twitter" /></a>
              <a className='twitter' href="https://www.instagram.com/magawtf_?igsh=M21vcWtlcGM3Zm10&utm_source=qr" target="_blank"><img src='/instagram.png' alt="instagram" /></a>
            </div>
          </div>
          <div className='contact__container-form'>
            <form className='contact-form' onSubmit={submitHandler}>
              <div className='contact-form-top'>
                <div className='contact-form-top-left'>
                  <p>name</p>
                  <input onChange={changeHandler} type="text" name="name" value={formState.name || ""} ></input>
                </div>
                <div className='contact-form-top-left'>
                  <p>email</p>
                  <input onChange={changeHandler} type="email" value={formState.email || ""} name="email"></input>
                </div>
              </div>
              <div className='contact-form-middle'>
                <p>subject</p>
                <input onChange={changeHandler} type="text" value={formState.subject || ""} name="subject"></input>
              </div>
              <div className='contact-form-middle'>
                <p>message</p>
                <input onChange={changeHandler} type="text" name="message" value={formState.message || ""} id="" />
              </div>
              <button type="submit" value="send email">send message</button>
            </form>
          </div>
        </div>

        <div className='contact__container-footer'>
          <Footer />
        </div>
      </div>
    </>
  ) 
}

export default Contact