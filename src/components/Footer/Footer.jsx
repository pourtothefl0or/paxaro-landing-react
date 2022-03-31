import React from 'react'
import styled from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY } from '../../constants'
import { Container, Logo, Menu } from '../'
import { Apps } from '../Apps'
import { Link } from '../../ui'
import toTop from '../../assets/images/Icons/to-top.svg'

const Footer = ({...props}) => {
  const setScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <StyledFooter>
      <FooterContainer>
        <FooterTop>
          <FooterLogo link='#'/>
          <FooterApps/>
          <FooterColumns>
            <Menu links={props.links.menuList}/>
            <Menu links={props.links.submenuList}/>
            <Menu links={props.links.socialList}/>
          </FooterColumns>
          <FooterButtons>
            <Link link="#">Личный кабинет</Link>
          </FooterButtons>
        </FooterTop>
        <FooterBottom>
          <Copyright>&copy;&nbsp;2021 Kadex Enterprise pte Ltd.</Copyright>
          <FooterPolitics links={props.links.politicsList}/>
          <ToTop onClick={() => setScrollTop()}>
            <span>Вернуться наверх</span>
            <img src={toTop} alt="" aria-hidden="true" />
          </ToTop>
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

  @media (min-width: 1024px) {
    li {
      &:not(:last-child) {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -15px;
          display: inline-block;
          width: 1px;
          height: 20px;
          background-color: ${COLORS.white};
          transform: translateY(-50%);
        }
      }
    }
  }

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

const ToTop = styled.button`
  grid-area: top;
  justify-self: end;
  display: inline-flex;
  align-items: center;
  column-gap: 4px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;

  span {
    ${TYPOGRAPHY.caption2Semibold14}
    color: ${COLORS.white};
    transition: all ${PRIMARY.primaryAnimation};
    transition-property: color;
  }

  &:focus,
  &:hover {
    span {
      color: ${COLORS.green};
    }
  }

  @media (max-width: 1023px) {
    span {
      display: none;
    }
  }
`

export default Footer
