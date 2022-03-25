import React from 'react'
import styled from 'styled-components'

// --- images ---
import logoDesktop from '../../images/logo/logo-desktop.svg'
import logoMobile from '../../images/logo/logo-mobile.svg'

const Logo = ({className}) => {
  return (
    <StyledLogo className={className} href="#">
      <picture>
        <source srcSet={logoMobile} media="(max-width: 1023px)"/>
        <img src={logoDesktop} alt="Paxaro logo"/>
      </picture>
    </StyledLogo>
  )
}

const StyledLogo = styled.a`
  display: inline-block;

  @media (max-width: 1023px) {
    max-width: 31px;
  }
`

export default Logo
