import React, { useState } from 'react'
import BacktoTopButton from '../BacktoTopButton'
import Footer from '../Components/Footer'
import HeroSction from '../Components/HeroSection'
import InfoSection from '../Components/InfoSection'
import { homeObjOne,homeObjTwo ,homeObjThree,homeObjTFour,homeObjFive ,homeObjTSix} from '../Components/InfoSection/Data'
import Navbar from '../Components/Navbar'
import Services from '../Components/Services'
import Sidebar from '../Components/Sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const togle= () => {
        setIsOpen(!isOpen)
    }
    
  return (
    <>
        <Sidebar togle={togle} isOpen={isOpen} />
        <Navbar togle={togle}/>
        <HeroSction/>
        <InfoSection {...homeObjOne }/>
        <InfoSection {...homeObjTwo }/>
        <Services />
        <InfoSection {...homeObjThree }/>
        <Footer/>
        <BacktoTopButton/>
    </>
  )
}

export default Home