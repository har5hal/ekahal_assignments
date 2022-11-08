import React from 'react'
import BannerImage from "../assets/images/banner-bg.svg"

function Banner() {
  return (
    <div className='banner-section bg-secondary'>
        <div className='container'>
            <div className='Banner_links p-3'>
              <a href='#' className='font-weight-bold'>Inclusive Development</a>
              <a href='#'>Navigate To Resources</a>
            </div>

            <div className='row align-items-center py-6'>
              <div className='col col-md-4 col-lg-4'>
                <h2 className='section_header'>What is <br/>Inclusion?</h2>
                <p className='mb-4 text-justify'>Every person, regardless of their identity, is instrumental to the transformation of their own societies - and yet many are still denied full access to legal protections, social and economic participation and essential services, either in principle or in practice. Their inclusion throughout the development process is essential to achieve the human right to health and can be realised by accountably, affordably, and reliably expanding health care access to the poor and most vulnerable. </p>
                <a href='#' className='btn btn-primary text-uppercase rounded-0 font-weight-bold'>Learn More</a>
              </div>
              <div className='col col-md-8 col-lg-8'>
                <img src={BannerImage} alt="Banner Image" className='img-fluid' />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner