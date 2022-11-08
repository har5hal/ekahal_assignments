import React from 'react'

function Title({headertitle,sectioncontent}) {
  return (
    <div className='row justify-content-center'>
        <div className='col-10 col-md-6'>
            <div className='section_title text-center mb-5'>
                <h2 className='section_header mb-3'>{headertitle}</h2>
                <p className='section_content'>{sectioncontent}</p>
            </div>
        </div>
    </div>
  )
}

export default Title