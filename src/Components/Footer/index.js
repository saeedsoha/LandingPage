import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIcons, SocialIconsLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRight } from './FooterElements'
import {FaFacebook,FaInstagram,FaYoutube, FaTwitter,FaLinkedin  } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'


const Footer = () => {


    const togleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testemonius</FooterLink>
                            <FooterLink to='/signin'>Carres</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/signin'>Contact</FooterLink>
                            <FooterLink to='/signin'>Support</FooterLink>
                            <FooterLink to='/signin'>Dtinationses</FooterLink>
                            <FooterLink to='/signin'>Sponsoships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/signin'>Submit Video</FooterLink>
                            <FooterLink to='/signin'>Ambassadors</FooterLink>
                            <FooterLink to='/signin'>Agency</FooterLink>
                            <FooterLink to='/signin'>Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/signin'>Instagram</FooterLink>
                            <FooterLink to='/signin'>Facebook</FooterLink>
                            <FooterLink to='/signin'>Youtube</FooterLink>
                            <FooterLink to='/signin'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='' onClick={togleHome}>
                            dolla
                        </SocialLogo>
                        <WebsiteRight>Dolla© {new Date().getFullYear()} all rights reserved </WebsiteRight>
                        <SocialIcons>
                            <SocialIconsLink href='/'  target='_blank' aria-label='Facebook' >
                                <FaFacebook/>
                            </SocialIconsLink>
                            <SocialIconsLink href='/'  target='_blank' aria-label='Instagram' >
                                <FaInstagram/>
                            </SocialIconsLink>
                            <SocialIconsLink href='/'  target='_blank' aria-label='Youtube' >
                                <FaYoutube/>
                            </SocialIconsLink>
                            <SocialIconsLink href='/'  target='_blank' aria-label='Twitter' >
                                <FaTwitter/>
                            </SocialIconsLink>
                            <SocialIconsLink href='/'  target='_blank' aria-label='Linkedin' >
                                <FaLinkedin/>
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer