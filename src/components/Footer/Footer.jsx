import React from 'react'
import styled from 'styled-components'
import { COLORS, TYPOGRAPHY } from '../../constants'
import { Container } from '../Container'
import { Logo } from '../Logo'
import { Apps } from '../Apps'
import { Menu } from '../Menu'
import { ToTop } from '../ToTop'
import { Button } from '../../ui'

const Footer = ({...props}) => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterTop>
          <FooterLogo/>
          <FooterApps/>
          <FooterColumns>
            <Menu links={props.links.menuList}/>
            <Menu links={props.links.submenuList}/>
            <Menu links={props.links.socialList}/>
          </FooterColumns>
          <FooterButtons>
            <Button>Личный кабинет</Button>
          </FooterButtons>
        </FooterTop>
        <FooterBottom>
          <Copyright>&copy;&nbsp;2021 Kadex Enterprise pte Ltd.</Copyright>
          <FooterPolitics links={props.links.politicsList}/>
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
      "logo columns . Buttons"
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

const FooterButtons = styled.div`
  @media (min-width: 1024px) {
    grid-area: Buttons;
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

const FooterPolitics = styled(Menu)`
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
