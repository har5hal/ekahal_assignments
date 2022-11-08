import React from 'react'
import Title from '../../components/Title'

import PointerThumb from "../../assets/images/pointer_thumb.jpg";
import PeopleIcon from "../../assets/images/icons/people.png";
import speedmeterIcon from "../../assets/images/icons/speedmeter.png";

function PointerSection() {

  const sectionTitle = "We are providing best business service."
  const sectionContent = "Problems trying to resolve the conflict between the two major realms of Classical physics: Neutonian mechanics"

  return (
    <div className='pointer_section my-10'>
        <div className='container'>
            <Title headertitle={sectionTitle} sectioncontent={sectionContent} />
            <div className='row mt-5'>
                <div className='col-12 col-md-8'>
                    <div className='pointer_thumb'>
                        <img src={PointerThumb} alt="play-thumb" className='img-fluid' />
                    </div>
                </div>
                <div className='col-12 col-md-4 mt-4 pl-6'>
                    <h2 className='pointer_title mb-3'>Most trusted in our field</h2>
                    <p className='pointer_content mb-5'>Most Calenders are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
                    <div className='pointer_list'>
                        <div className='pointer_item mb-3'>
                            <img src={PeopleIcon} alt="People_Icon" className=' pointer_item_icon mr-3' />
                            <div className='pointer_item_inner mt-1'>
                                <h4 className='pointer_item_title'>the quick fox jumps over the lazy dog</h4>
                                <p className='pointer_item_content'>Things on a very small scale...</p>
                            </div>
                        </div>
                        <div className='pointer_item mb-3'>
                            <img src={speedmeterIcon} alt="Speedmeter_icon" className=' pointer_item_icon mr-3' />
                            <div className='pointer_item_inner mt-1'>
                                <h4 className='pointer_item_title'>the quick fox jumps over the lazy dog</h4>
                                <p className='pointer_item_content'>Things on a very small scale...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PointerSection