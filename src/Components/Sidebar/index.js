import React from 'react'
import { CloseIcon, Icon, SidbarContainer, SidbarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements'

const Sidebar = ({togle, isOpen}) => {
  return (
    <SidbarContainer isOpen={isOpen} onClick={togle} >
      <Icon onClick={togle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidbarLink to='about'onClick={togle} >
            About
          </SidbarLink>
          <SidbarLink to='discover' onClick={togle}>
            Discover
          </SidbarLink>
          <SidbarLink to='services' onClick={togle}>
            Services
          </SidbarLink>
          <SidbarLink to='signup' onClick={togle}>
            Sign Up
          </SidbarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidbarContainer>
  )
}

export default Sidebar