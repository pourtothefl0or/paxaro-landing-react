import React, { useState } from 'react'
import styled from 'styled-components'
import { TYPOGRAPHY, COLORS, PRIMARY } from '../../constants'
import { Container } from '../Container'
import { Button } from '../../ui'

const Cookie = () => {
  const [popupVisibility, setPopupVisibility] = useState(true)
  const cookiePopupValue = 'cookiePopup=true'

  const changePopupState = () => {
    setPopupVisibility(!popupVisibility)
    setTimeout(() => document.cookie = cookiePopupValue, 300)
  }

  return (
    document.cookie.search(cookiePopupValue) < 0 &&
      <StyledCookie className={popupVisibility ? '' : 'is-hidden'}>
        <CookieContainer>
          <CookieText>
            Cайт Paxaro.com использует файлы cookie и другие технологии для вашего удобства пользования сайтом, анализа использования наших товаров и услуг и повышения качества рекомендаций. <a href="#">Подробнее</a>
          </CookieText>
          <Button onClick={() => changePopupState()}>Хорошо</Button>
        </CookieContainer>
      </StyledCookie>
  )
}

const StyledCookie = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 500;
  width: 100%;
  background: rgba(1, 2, 2, 0.8);
  transition: all ${PRIMARY.primaryAnimation};
  transition-property: opacity, visibility;

  &.is-hidden {
    opacity: 0;
    visibility: hidden;
  }
`

const CookieContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 121px;
  padding-top: 23px;
  padding-bottom: 23px;

  @media (max-width: 1023px) {
    column-gap: 60px;
  }
`


const CookieText = styled.p`
  margin: 0;
  max-width: 610px;
  ${TYPOGRAPHY.caption3Semibold12}
  color: ${COLORS.white};

  a {
    text-decoration: underline;
    color: ${COLORS.white};
    transition: all ${PRIMARY.primaryAnimation};
    transition-property: color;

    &:hover {
      color: ${COLORS.green}
    }
  }
`

export default Cookie
