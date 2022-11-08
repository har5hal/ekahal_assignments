import React from 'react'
import Banner from '../components/Banner';
import System from '../components/System';
import Download from '../components/Download';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
        <Banner></Banner>
        <System></System>
        <Download></Download>
        <Contact></Contact>
        <div className='bg-secondary p-6'></div>
    </>
  )
}

export default Home