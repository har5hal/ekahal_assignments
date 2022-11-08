import React from 'react'

function InfoCard({imgsrc,imgalt,cardtitle,cardcontent}) {
  return (
    <div className='info_card'>
        <img src={imgsrc} alt={imgalt} className='card_icon mb-4' />
        <h2 className='card_title font-weight-bold mb-3'>{cardtitle}</h2>
        <p className='card_content'>{cardcontent}</p>
    </div>
  )
}

export default InfoCard