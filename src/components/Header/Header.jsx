import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY, SECONDARY } from '../../constants'
import { Container, Logo, Language } from '../'
import { Menu } from '../Menu'

// --- ui ---
import { Button } from '../../ui'

const Header = ({...props}) => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderTop>
          <Logo link='#'/>
          <MenuButton
            className={!menuVisible ? '' : 'is-active'}
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <span></span>
            <span></span>
            <span></span>
          </MenuButton>
        </HeaderTop>
        <HeaderBottom className={!menuVisible ? '' : 'is-open'}>
          <HeaderNav>
            <HeaderMenu links={props.links.menuList}/>
          </HeaderNav>
          <HeaderSubMenu>
            <HeaderSubMenuContainer>
              <Submenu links={props.links.submenuList}/>
            </HeaderSubMenuContainer>
          </HeaderSubMenu>
          <HeaderButtons>
            <HeaderButtonsTitle>Личный кабинет</HeaderButtonsTitle>
            <HeaderButtonsWrapper>
              <Button>Зарегистрироваться</Button>
              <Button border>Войти</Button>
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
    top: 0;
    right: 0;
    left: 0;
    z-index: 30;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px ${PRIMARY.primaryHorizontalIndent};
    width: 100%;
    background-color: ${COLORS.black};
  }
`

const HeaderMenu = styled(Menu)`
  .menu__link {
    ${TYPOGRAPHY.caption1Semibold18}
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: baseline;
    row-gap: 18px;

    .menu__link {
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
  width: 100%;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    margin-left: 42px;
  }

  @media (max-width: 1023px) {
    overflow-y: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
    display: block;
    padding: 90px ${PRIMARY.primaryHorizontalIndent} 0;
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
    right: 0;
    left: 0;
    z-index: 20;
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

const Submenu = styled(Menu)`
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: baseline;
    row-gap: 18px;
  }
`

const HeaderButtons = styled.div`
  @media (min-width: 1024px) {
    margin: 0 8px 0 auto;
  }

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
