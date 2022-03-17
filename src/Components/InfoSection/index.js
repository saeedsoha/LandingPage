import React, { useEffect, useState } from 'react'
import { Button } from '../ButtonElement'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElement'

const InfoSection = ({ id, lightBg, imgStart, primary, topLine, lightText, headline, darkText, description, buttonLable, img, alt, dark, dark2,Active }) => {

    const [objctOne, setObjectOne] = useState(false)
    const [objctTwo, setObjectTwo] = useState(false)


    const column1Active = () => {
        if (window.scrollY >= 4000) {
            setObjectOne(true)
            console.log('more than 4299');
        }else if (window.scrollY >= 3000) {
            setObjectTwo(true)
                console.log('more than 4299')
        }

    }
    useEffect(() => {
        window.addEventListener('scroll', column1Active)
    }, [])


return (

    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1 className={objctOne ? 'object1' : ''} objctTwo={objctTwo} >
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText} >{headline}</Heading>
                        <Subtitle darkText={darkText} >{description}</Subtitle>
                        <BtnWrap>
                            <Button to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                            >{buttonLable}</Button>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt} />
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
)
}

export default InfoSection