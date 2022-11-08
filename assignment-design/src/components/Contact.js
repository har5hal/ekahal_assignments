import React from 'react'
import ContactImg from '../assets/images/contact.svg'

function Contact() {
  return (
    <div className='contact-section bg-light'>
        <div className='container'>
            <div className='row align-items-center justify-content-around'>
              <div className='col col-md-5 col-lg-5'>
                <img src={ContactImg} alt="ContactImg" className='contact-img img-fluid' />
              </div>

              <div className='col col-md-6 col-lg-6'>
                <h2 className='section_header'>Contact Us</h2>
                <p className='mb-4 text-justify'>Please share your questions, suggestions and insights with us at l4i@swasti.org.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact