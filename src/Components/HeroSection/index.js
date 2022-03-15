import React, { useState } from 'react'
import { ArrowFowward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Video from '../../videos/video_3.mp4'
import { Button } from '../ButtonElement'

const HeroSction = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay={true} muted  loop src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking made Easy</HeroH1>
                <HeroP>
                    Sign up for new account today and receive in
                    credit towards your
                    next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                            primary='true'
                            dark='trrue'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            exact='true'
                    >
                        Get stareted {hover ? <ArrowFowward/> : <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
    </HeroContainer>
  )
}

export default HeroSction