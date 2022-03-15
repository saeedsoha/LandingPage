import React, { useEffect, useState } from 'react'
import {IoIosArrowUp} from 'react-icons/io'
import { BackToContainer, BacktoTopIcon } from './BacktoTopButton'
import { animateScroll as scroll } from 'react-scroll'


const BacktoTopButton = () => {
    const [activeDisplay, setActiveDispla] =useState(false)
   
    const buttonActive = () => {
        if(window.scrollY >= 800) {
            setActiveDispla(true)
        }else {
            setActiveDispla(false)

        }
    }

    useEffect(() => {
        window.addEventListener('scroll', buttonActive)
    }, [])

    const backToTop= () => {
        scroll.scrollToTop()
    }
  return (

    

    <BackToContainer  activeDisplay={activeDisplay} onClick={backToTop}>
        <BacktoTopIcon to='/'>
            <IoIosArrowUp/>
        </BacktoTopIcon>
    </BackToContainer>
  )
}

export default BacktoTopButton