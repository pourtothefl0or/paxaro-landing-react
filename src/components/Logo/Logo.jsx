import React from 'react'
import styled from 'styled-components'
import logoDesktop from '../../assets/images/Logo/logo-desktop.svg'
import logoMobile from '../../assets/images/Logo/logo-mobile.svg'

const Logo = ({className, link}) => {
  return (
    <StyledLogo className={className} href={link}>
      <picture>
        <source srcSet={logoMobile} media="(max-width: 1023px)"/>
        <img src={logoDesktop} alt="Paxaro logo"/>
      </picture>
    </StyledLogo>
  )
}

const StyledLogo = styled.a`
  display: inline-block;
`

export default Logo
