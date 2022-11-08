import React from 'react'
import InclusionExperts from "../assets/images/inclusion-experts.svg";
import InclusiveHealth from "../assets/images/inclusive-health.svg";
import InclusionTool from "../assets/images/inclusion-tool.svg";

function Download() {
  return (
    <div className='download-section bg-secondary'>
        <div className='container'>
            <div className='row align-items-center py-6 pb-7 justify-content-around'>
              <div className='col col-md-6 col-lg-6'>
                <h2 className='section_header'>How can you make your program more inclusive?</h2>
                <p className='mb-4 text-justify'>While inclusion as an objective is inherent in development sector efforts, actors may be at different stages of their inclusion journey, and facing a diverse set of challenges. While some stakeholders may be concerned about identifying and reaching the 'last mile' or 'base of pyramid' populations, others may be struggling to recruit and retain a diverse workforce or to integrate an inclusion lens across their program cycle. Wherever you are on this inclusion journey, the Inclusive Development Resource Guide aims to support your efforts.</p>
              </div>
              <div className='col col-md-5 col-lg-5'>
                <div className='download-file-section'>
                    <span className='text-uppercase bg-primary text-white py-2 px-3 rounded'>Click to download</span>
                    <ul class="list-group bg-white py-4">
                        <li class="list-group-item py-4 px-5 px-md-3"><a href='#' className='text-dark font-weight-bold'><img src={InclusiveHealth} alt="InclusiveHealth" className='img-fluid mr-4' />Inclusive Health Learning Brief</a></li>
                        <li class="list-group-item py-4 px-5 px-md-3"><a href='#' className='text-dark font-weight-bold'><img src={InclusionTool} alt="InclusionTool" className='img-fluid mr-4' />Inclusion Tools and Best Practices</a></li>
                        <li class="list-group-item py-4 px-5 px-md-3"><a href='#' className='text-dark font-weight-bold'><img src={InclusionExperts} alt="InclusionExperts" className='img-fluid mr-4' />Inclusion Experts Directory</a></li>
                    </ul>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Download