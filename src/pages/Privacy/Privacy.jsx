import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import "./Privacy.css"

function Privacy() {
  return (
    <div className='privacy__container'>
      <div className='privacy__container-navbar'>
        <Navbar />
      </div>

      <div className='privacy__container-body'>
        <div className='privacy__container-body_1'>
          <h1>privacy policy</h1>
          <p>
           at magawtf, we take the privacy and security of our clients and website visitors very seriously. this privacy policy outlines the types of personal information we collect, how we use and protect that information, and your rights in relation to that information.
          </p>
        </div>
        <div className='privacy__container-body_2'>
          <h3>information we collect</h3>
          <p>
            we may collect the following information from you: <br />
            * personal information, such as your name, email address, phone number, and billing information. <br />
            * information related to your use of our website, including ip address, browser type, operating system, and other technical information.<br />
            * other information that you voluntarily provide to us, such as in communications with our team or through our social media channels.
          </p>
        </div>
        <div className='privacy__container-body_3'>
          <h3>how we use your information </h3>
          <p>
            we use the information we collect for the following purposes: <br />
            * to provide and improve our services to you.<br />
            * to communicate with you regarding your account, orders, or inquiries.<br />
            * to personalize your experience on our website. <br />
            * to detect and prevent fraud and unauthorized access to our services. <nr />
            * to comply with legal and regulatory requirements.
          </p>
         
        </div>
        <div className='privacy__container-body_3'>
          <h3>sharing yout information</h3>
          <p>
            we do not sell trade, or rent your personal information to third parties. We may share your information with our partners, service providers, and contractors who assist us in providing our services, such as hosting providers, payment processors, and shipping providers. We only share the minimum amount of information necessary for them to perform their services.
          </p>
        </div>
        <div className='privacy__container-body_3'>
          <h3>security</h3>
          <p>
            we take reasonable and appropriate measures to protect your personal information from loss, theft, unauthorized access, disclosure, alteration, and destruction. however, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </div>
        <div className='privacy__container-body_3'>
          <h3>your rights</h3>
          <p>
            you have certain rights regarding your personal information, including the right to access, correct, and delete your information. you may also have the right to object to or restrict certain types of processing, and to request that we provide your information in a portable format. to exercise these rights, please contact us at the email address provided below.

          </p>
          <h3 className='needm'>changes to this policy </h3>
          <p>
            we may update this privacy policy from time to time. we will notify you of any changes by posting the updated policy on our website. your continued use of our services following the posting of any changes to this policy constitutes your acceptance of those changes.
          </p>

          <h3 className='needm'>
            if you have any questions or concerns about our privacy policy, please contact us at contact@magawtf.com
          </h3>
        </div>
      </div>

      <div className='privacy__container-footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Privacy