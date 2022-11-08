import React from 'react'

import Banner from './Banner';
import ServicesSection from './ServicesSection';

function hero() {
  return (
    <div className='hero_section'>
        <Banner></Banner>
        <ServicesSection></ServicesSection>
    </div>
  )
}

export default hero;