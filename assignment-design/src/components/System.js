import React from 'react'
import Tribes from "../assets/images/scheduled-tribes.svg"
import Disabilities from "../assets/images/disabilities.svg"
import Poor from "../assets/images/poor.svg"
import Castes from "../assets/images/castes.svg"
import Gender from "../assets/images/gender.svg"
import Youth from "../assets/images/youth.svg"

function System() {

    const systemData = [
        {
            title: "Scheduled Tribes",
            src: Tribes,
            alt: "Tribes"
        },
        {
            title: "People with Disabilities",
            src: Disabilities,
            alt: "Disabilities"
        },
        {
            title: "Urban Poor",
            src: Poor,
            alt: "Poor"
        },
        {
            title: "Scheduled Castes",
            src: Castes,
            alt: "Castes"
        },
        {
            title: "Sexual & Gender Minorities",
            src: Gender,
            alt: "Gender"
        },
        {
            title: "Youth & Adolescents",
            src: Youth,
            alt: "Youth"
        }
    ]
    
    const sectionTitle = "Practice Advice";
    const sectionContent = "Problems trying to resolve the conflict between the two major realms of Classical physics: Neutonian mechanics"

    const systemItems = systemData.map((el,i) => {
        return (
            <div className='col col-md-4 col-lg-2' key={i}>
            <div className='d-flex align-items-center p-3 my-4'>
                <img src={el.src} alt={el.alt} className='system_icons img-fluid mr-3' />
                <h6 className='system_title font-weight-bold'>{el.title}</h6>
            </div>
            </div>
        )
    })

  return (
    <div className='system-section bg-light'>
        <div className='container text-center py-6'>
            
            <h2 className='section_header'>Who do we need to include in India?</h2>
            <p className='section_content mb-3'>Despite substantial improvements over the past two decades, health outcomes in India continue to be closely tied to socio-economic status, social identity and geographical location. 'Excluded groups' are those among whom a majority of members systematically lack access to appropriate, affordable and quality health services.</p>
            
            <div className='row align-items-center text-left'>
              {systemItems}
            </div>

            <a href='#' className='btn btn-primary text-uppercase rounded-0 font-weight-bold mt-3'>Learn More</a>

        </div>
    </div>
  )
}

export default System