import React from 'react'
import styled from 'styled-components'

// --- constants ---
import { COLORS, TYPOGRAPHY } from '../../constants'

// --- components ---
import { Container } from '../Container'
import { Logo } from '../Logo'
import { Apps } from '../Apps'
import { Menu } from '../Menu'
import { SubMenu } from '../SubMenu'
import { Social } from '../Social'
import { Politics } from '../Politics'
import { ToTop } from '../ToTop'

// --- ui ---
import { Btn } from '../../ui'

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterTop>
          <FooterLogo/>
          <FooterApps/>
          <FooterColumns>
            <Menu/>
            <SubMenu/>
            <Social/>
          </FooterColumns>
          <FooterBtns>
            <Btn>Личный кабинет</Btn>
          </FooterBtns>
        </FooterTop>
        <FooterBottom>
          <Copyright>&copy;&nbsp;2021 Kadex Enterprise pte Ltd.</Copyright>
          <FooterPolitics/>
          <FooterToTop>Вернуться наверх</FooterToTop>
        </FooterBottom>
      </FooterContainer>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: ${COLORS.black};
`

const FooterContainer = styled(Container)`
  padding-top: 56px;
  padding-bottom: 41px;

  @media (max-width: 1024px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`

const FooterTop = styled.div`
  margin-bottom: 35px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: max-content 1fr 85px max-content;
    grid-template-rows: max-content 45px max-content;
    grid-template-areas:
      "logo columns . btns"
      ". columns . ."
      "apps columns . .";
  }

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 25px;
  }
`

const FooterLogo = styled(Logo)`
  @media (min-width: 1024px) {
    grid-area: logo;
  }
`

const FooterApps = styled(Apps)`
  @media (min-width: 1024px) {
    grid-area: apps;
    flex-direction: column;
  }
`

const FooterColumns = styled.div`
  @media (min-width: 1024px) {
    grid-area: columns;
    justify-self: end;
    display: flex;
    column-gap: 60px;

    ul {
      flex-direction: column;
      align-items: baseline;
      gap: 0;
      width: fit-content;

      li:not(:last-child) {
        margin: 0 0 15px !important;
      }
    }
  }

  @media (max-width: 1023px) {
    ul:not(:last-of-type) {
      display: none;
    }
  }
`

const FooterBtns = styled.div`
  @media (min-width: 1024px) {
    grid-area: btns;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 8px;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`

const FooterBottom = styled.div`
  display: grid;
  grid-template-areas:
    "copyright copyright"
    "politics top";
  gap: 25px;

  @media (max-width: 1023px) {
    grid-template-areas:
      "politics politics"
      "copyright top";
    column-gap: 10px;
  }
`

const FooterPolitics = styled(Politics)`
  grid-area: politics;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: baseline;
    row-gap: 12px;
  }
`

const Copyright = styled.p`
  grid-area: copyright;
  margin: 0;
  ${TYPOGRAPHY.caption2Semibold14}
  color: ${COLORS.white};

  @media (max-width: 1023px) {
    order: 1;
  }
`

const FooterToTop = styled(ToTop)`
  grid-area: top;
  justify-self: end;
`

export default Footer
