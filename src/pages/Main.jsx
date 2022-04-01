import React from 'react'
import '../styles/style.css'
import { Header, Footer, Cookie } from '../components'
import { Hero, Advantages, Offers, Program, App, Feedback } from '../pageComponents/Index'
import styled from 'styled-components'
import { PRIMARY } from '../constants'

const Main = () => {
  const menuList = [
    { id: 1, label: 'О продукте', path: '#' },
    { id: 2, label: 'Блог', path: '#' },
    { id: 3, label: 'О компании', path: '#' }
  ]

  const submenuList = [
    { id: 1, label: 'История', path: '#' },
    { id: 2, label: 'Преимущества', path: '#' },
    { id: 3, label: 'База знаний', path: '#' },
    { id: 4, label: 'Как работает?', path: '#' },
    { id: 5, label: 'Подписка', path: '#' },
    { id: 6, label: 'Как начать?', path: '#' },
  ]

  const socialList = [
    { id: 1, label: 'Instagram', path: '#' },
    { id: 2, label: 'VC', path: '#' },
    { id: 3, label: 'Twitter', path: '#' },
    { id: 4, label: 'YouTube', path: '#' },
    { id: 5, label: 'Telegram', path: '#' }
  ]

  const politicsList = [
    { id: 1, label: 'Пользовательское соглашение', path: '#' },
    { id: 2, label: 'Политика конфиденциальности', path: '#' },
    { id: 3, label: 'Политика использования файлов cookie', path: '#' },
    { id: 4, label: 'Условия пробного периода', path: '#' }
  ]

  return (
    <>
      <Header links={{menuList, submenuList, socialList}}/>
      <StyledMain>
        <Hero/>
        <Advantages/>
        <Offers/>
        <Program/>
        <App/>
        <Feedback/>
      </StyledMain>
      <Footer links={{menuList, submenuList, socialList, politicsList}}/>
      <Cookie/>
    </>
  )
}

const StyledMain = styled.main`
  padding: ${PRIMARY.primaryVerticalIndent} 0;

  @media (max-width: 1023px) {
    padding-bottom: ${PRIMARY.primaryVerticalIndentSmall};
  }
`

export default Main
