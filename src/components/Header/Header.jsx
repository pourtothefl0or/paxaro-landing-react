import React from 'react'
import styled from 'styled-components'

// --- constants ---
import { COLORS, TYPOGRAPHY } from '../../constants'

// --- components ---
import { MenuBtn } from '../MenuBtn'
import { Container } from '../Container'
import { Logo } from '../Logo'
import { Menu } from '../Menu'
import { SubMenu } from '../SubMenu'
import { Social } from '../Social'
import { Language } from '../Language'

// --- ui ---
import { Btn } from '../../ui'

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderTop>
          <Logo/>
          <HeaderMenuBtn/>
        </HeaderTop>
        <HeaderBottom>
          <HeaderNav>
            <HeaderMenu/>
          </HeaderNav>
          <HeaderSubMenu>
            <HeaderSubMenuContainer>
              <StyledSubMenu/>
            </HeaderSubMenuContainer>
          </HeaderSubMenu>
          <HeaderBtns>
            <HeaderBtnsTitle>Личный кабинет</HeaderBtnsTitle>
            <HeaderBtnsWrapper>
              <Btn>Зарегистрироваться</Btn>
              <BtnLine>Войти</BtnLine>
            </HeaderBtnsWrapper>
          </HeaderBtns>
          <HeaderSocial/>
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

    padding: 22px var(--container-indent);
    width: 100%;
    background-color: ${COLORS.black};
  }
`

const HeaderMenu = styled(Menu)`
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: baseline;
    row-gap: 18px;
  }
`

const HeaderMenuBtn = styled(MenuBtn)`
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
    display: block;
    padding: 90px var(--container-indent) var(--container-indent);
    height: 100vh;
    background-color: ${COLORS.black};
    opacity: 0;
    visibility: hidden;
    transform: translateY(-100%);
    transition: all var(--primary-animation);
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
    border-bottom: var(--primary-border);
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
    background-color: ${COLORS.dark};
  }

  @media (max-width: 1023px) {
    padding: 24px 0;
    border-bottom: var(--primary-border);
  }
`

const HeaderSubMenuContainer = styled(Container)`
  @media (max-width: 1023px) {
    padding: 0;
  }
`

const StyledSubMenu = styled(SubMenu)`
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: baseline;
    row-gap: 18px;
  }
`

const HeaderBtns = styled.div`
  margin: 0 8px 0 auto;

  @media (max-width: 1023px) {
    padding: 24px 0;
  }
`

const HeaderBtnsTitle = styled.h2`
  margin: 0 0 18px;
  ${TYPOGRAPHY.subtitle1Bold24}
  color: ${COLORS.white};

  @media (min-width: 1024px) {
    display: none;
  }
`

const HeaderBtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 1023px) {
    flex-wrap: wrap;
  }
`

const BtnLine = styled(Btn)`
  border-color: ${COLORS.green};
  color: ${COLORS.white};
  background: transparent;
`

const HeaderSocial = styled(Social)`
  padding-bottom: 24px;
  border-bottom: var(--primary-border);

  @media (min-width: 1024px) {
    display: none;
  }
`

export default Header
