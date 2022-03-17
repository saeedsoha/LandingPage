import React, { useEffect, useState } from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarEelemnts'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({ togle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const ChangeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', ChangeNav)
    }, [])


    const togleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={togleHome}>TBank</NavLogo>
                    <MobileIcon onClick={togle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                exact='true'
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" spy={true} smooth={true} offset={-80} duration={500} exact='true' >
                                Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" spy={true} smooth={true} offset={-80} duration={500} exact='true' >
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup" spy={true} smooth={true} offset={-80} duration={500} exact='true'>
                                Sign Up
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar