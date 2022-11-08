import React from 'react'

import InfoCard from '../../components/InfoCard'

import BriefcaseIcon from '../../assets/images/icons/briefcase_blue.png'
import StoreIcon from '../../assets/images/icons/store_blue.png'
import PanelIcon from '../../assets/images/icons/panel_white.png'





function ServicesSection() {

  const services = [
    {
      src: BriefcaseIcon,
      alt: 'BriefcaseIcon',
      title: "Digital Marketing",
      content: "We focus on ergonomics and meeting you where you work."
    },
    {
      src: StoreIcon,
      alt: 'StoreIcon',
      title: "Ux / Ui Design",
      content: "Just type what's on your mind and we'll get you there."
    },
    {
      src: PanelIcon,
      alt: 'PanelIcon',
      title: "App Development",
      content: "The quick fox jumps over the lazy dog."
    }
  ]

  const serviceItems = services.map((serviceEl,i) => {
      return (
        <div className='col-12 col-md-4 service_list_item' key={i}>
          <InfoCard imgsrc={serviceEl.src} imgalt={serviceEl.alt} cardtitle={serviceEl.title} cardcontent={serviceEl.content} />          
        </div>
      )
  }  
  )

  

  return (
    <div className='service_section'>
      <div className='container'>
        <div className='row'>
          {serviceItems}
        </div>
      </div>
    </div>
  )
}

export default ServicesSection