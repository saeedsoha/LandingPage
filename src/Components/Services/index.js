import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElement'

import img1 from '../../Images/svg-1.svg'
import img2 from '../../Images/svg-2.svg'
import img3 from '../../Images/svg-3.svg'
const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={img1} alt='card'/>
                <ServicesH2>Reduce Expensec</ServicesH2>
                <ServicesP>We help reduce you fees abd increes your overall reneve</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={img2} />
                <ServicesH2>Virtual offices</ServicesH2>
                <ServicesP>We help reduce you fees abd increes your overall reneve</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={img3} />
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>We help reduce you fees abd increes your overall reneve</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services