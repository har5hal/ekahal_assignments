import React from 'react'

import Title from '../../components/Title'
import InfoCard from '../../components/InfoCard'

import BriefbagIcon from "../../assets/images/icons/bag_blue.png"
import CustomerIcon from "../../assets/images/icons/customer_blue.png"
import AwardIcon from "../../assets/images/icons/award_blue.png"
import CasesIcon from "../../assets/images/icons/cases_blue.png"

function WhySection() {

  const whyus = [
    {
      src: CasesIcon,
      alt: "Cases Done Icon",
      title: "3K",
      content: "Cases Done"
    },
    {
      src: CustomerIcon,
      alt: "Happy Customers Icon",
      title: "45",
      content: "Happy Customers"
    },
    {
      src: AwardIcon,
      alt: "Award Icon",
      title: "12+",
      content: "Award Winning"
    },
    {
      src: BriefbagIcon,
      alt: "Cases Done Icon",
      title: "1.5K",
      content: "Cases Done"
    }
  ]

  const sectionTitle = "Why Choose Us"
  const sectionContent = "Problems trying to resolve the conflict between the two major realms of Classical physics: Neutonian mechanics"
  
  const whyusItems = whyus.map((el,i) => {
    return(
      <div className='col-12 col-sm-6 col-md-3 whyus_items mb-4' key={i}>
        <InfoCard imgsrc={el.src} imgalt={el.alt} cardtitle={el.title} cardcontent={el.content} />
      </div>
    )
  })
  
  return (
    <div className='why_us_section my-10'>
      <div className='container'>
        <Title headertitle={sectionTitle} sectioncontent={sectionContent} />
        <div className='row mt-6'>
          {whyusItems}          
        </div>
      </div>
    </div>
  )
}

export default WhySection