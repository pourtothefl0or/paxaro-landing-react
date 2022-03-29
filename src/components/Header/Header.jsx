import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY, SECONDARY } from '../../constants'
import { Container } from '../Container'
import { Logo } from '../Logo'
import { Menu } from '../Menu'
import { Language } from '../Language'

// --- ui ---
import { Button } from '../../ui'

const Header = ({...props}) => {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderTop>
          <Logo/>
          <MenuButton
            className={!menuActive ? '' : 'is-active'}
            onClick={() => setMenuActive(!menuActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </MenuButton>
        </HeaderTop>
        <HeaderBottom className={!menuActive ? '' : 'is-open'}>
          <HeaderNav>
            <HeaderMenu links={props.links.menuList}/>
          </HeaderNav>
          <HeaderSubMenu>
            <HeaderSubMenuContainer>
              <StyledSubMenu links={props.links.submenuList}/>
            </HeaderSubMenuContainer>
          </HeaderSubMenu>
          <HeaderButtons>
            <HeaderButtonsTitle>Личный кабинет</HeaderButtonsTitle>
            <HeaderButtonsWrapper>
              <Button>Зарегистрироваться</Button>
              <ButtonLine>Войти</ButtonLine>
            </HeaderButtonsWrapper>
          </HeaderButtons>
          <HeaderSocial links={props.links.socialList}/>
          <Language/>
        </HeaderBottom>
      </HeaderContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  @media (min-width: 1024px) {
    position: relative;
    padding: 22px 0;
    background-color: ${COLORS.black};
  }
`

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
`

const HeaderTop = styled.div`
  @media (max-width: 1023px) {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px ${PRIMARY.primaryIndent};
    width: 100%;
    background-color: ${COLORS.black};
  }
`

const HeaderMenu = styled(Menu)`
  li a {
    ${TYPOGRAPHY.caption1Semibold18}
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: baseline;
    row-gap: 18px;

    li a {
      ${TYPOGRAPHY.subtitle1Bold24}
    }
  }
`

const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 4px;
  border: 0;
  width: 24px;
  height: 24px;
  background: transparent;
  transition: all ${PRIMARY.primaryAnimation};
  transition-property: width, height;
  cursor: pointer;

  span {
    display: inline-block;
    border-radius: 8px;
    width: 18px;
    height: 2px;
    background-color: ${COLORS.white};
    transition: all ${PRIMARY.primaryAnimation};
    transition-property: width, opacity, visibility, transform;
  }

  &.is-active {
    span {
      &:nth-of-type(1) {
        transform: translateY(6px) rotate(45deg);
      }

      &:nth-of-type(2) {
        opacity: 0;
        visibility: hidden;
      }

      &:nth-of-type(3) {
        transform: translateY(-6px) rotate(135deg);
      }
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`

const HeaderBottom = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    align-items: center;
    margin-left: 42px;
  }

  @media (max-width: 1023px) {
    overflow-y: auto;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 50;
    display: block;
    padding: 90px ${PRIMARY.primaryIndent} ${PRIMARY.primaryIndent};
    height: 100vh;
    background-color: ${COLORS.black};
    opacity: 0;
    visibility: hidden;
    transform: translateY(-100%);
    transition: all ${PRIMARY.primaryAnimation};
    transition-property: transform, opacity, visibility;

    &.is-open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0%);
    }
  }
`

const HeaderNav = styled.nav`
  @media (max-width: 1023px) {
    padding: 24px 0;
    border-bottom: ${SECONDARY.secondaryBorder};
  }
`

const HeaderSubMenu = styled.div`
  @media (min-width: 1024px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 50;
    padding: 11px 0;
    background-color: ${COLORS.darkBlack};
  }

  @media (max-width: 1023px) {
    padding: 24px 0;
    border-bottom: ${SECONDARY.secondaryBorder};
  }
`

const HeaderSubMenuContainer = styled(Container)`
  @media (max-width: 1023px) {
    padding: 0;
  }
`

const StyledSubMenu = styled(Menu)`
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: baseline;
    row-gap: 18px;
  }
`

const HeaderButtons = styled.div`
  margin: 0 8px 0 auto;

  @media (max-width: 1023px) {
    padding: 24px 0;
  }
`

const HeaderButtonsTitle = styled.h2`
  margin: 0 0 18px;
  ${TYPOGRAPHY.subtitle1Bold24}
  color: ${COLORS.white};

  @media (min-width: 1024px) {
    display: none;
  }
`

const HeaderButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 1023px) {
    flex-wrap: wrap;
  }
`

const ButtonLine = styled(Button)`
  border: 2px solid transparent;
  border-color: ${COLORS.green};
  padding: 9px 16px;
  color: ${COLORS.white};
  background: transparent;
`

const HeaderSocial = styled(Menu)`
  @media (min-width: 1024px) {
    display: none;
  }

  @media (max-width: 1023px) {
    border-bottom: ${SECONDARY.secondaryBorder};
    padding-bottom: 24px;
  }
`

export default Header
