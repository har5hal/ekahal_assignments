import React from 'react'

import Title from '../../components/Title'

import AdviceImg_1 from '../../assets/images/advice_1.jpg'
import AdviceImg_2 from '../../assets/images/advice_2.jpg'
import AdviceImg_3 from '../../assets/images/advice_3.jpg'
import AdviceImg_4 from '../../assets/images/advice_4.jpg'

function AdviceSection() {

    const adviceData = [
        {
            title: "A single source of truth",
            content: "Newton thought that light was made up of particles, but then it",
            src: AdviceImg_1,
            alt: "AdviceImg_1"
        },
        {
            title: "Fastest way to organize",
            content: "Quantum Mechanics is the description of the behaviour of",
            src: AdviceImg_2,
            alt: "AdviceImg_2"
        },
        {
            title: "Fastest way to take action",
            content: "They describe a universe consisting of bodies moving",
            src: AdviceImg_3,
            alt: "AdviceImg_3"
        },
        {
            title: "Work better together",
            content: "They finally obtained a consistent description of the",
            src: AdviceImg_4,
            alt: "AdviceImg_4"
        }
    ]
    
    const sectionTitle = "Practice Advice";
    const sectionContent = "Problems trying to resolve the conflict between the two major realms of Classical physics: Neutonian mechanics"

    const adviceItems = adviceData.map((el,i) => {
        return (
            <div className='col-12 col-sm-6 col-md-3' key={i}>
                <a href='javascript.void(0)' className='advice_item mb-4'>
                    <div className='advice_item_inner py-4 px-5'>
                        <h4 className='advice_title mb-3'>{el.title}</h4>
                        <p className='advice_content'>{el.content}</p>
                    </div>    
                        <img src={el.src} alt={el.alt} className='advice_img img-fluid' />
                </a>
            </div>
        )
    })

    return (
        <div className='advice_section my-10'>
            <div className='container'>
                <Title headertitle={sectionTitle} sectioncontent={sectionContent} />
                <div className='row mt-5'>
                    {adviceItems}
                </div>
            </div>
        </div>
    )
}

export default AdviceSection