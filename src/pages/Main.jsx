import React from 'react'
import '../styles/style.css'
import { Header, Footer } from '../components'
import { Hero, Advantages, Offers, Program, App, Feedback } from '../pageComponents/Index'

const Main = () => {
  const menuList = [
    { id: 1, label: 'О продукте' },
    { id: 2, label: 'Блог' },
    { id: 3, label: 'О компании' }
  ]

  const submenuList = [
    { id: 1, label: 'История' },
    { id: 2, label: 'Преимущества' },
    { id: 3, label: 'База знаний' },
    { id: 4, label: 'Как работает?' },
    { id: 5, label: 'Подписка' },
    { id: 6, label: 'Как начать?' },
  ]

  const socialList = [
    { id: 1, label: 'Instagram' },
    { id: 2, label: 'VC' },
    { id: 3, label: 'Twitter' },
    { id: 4, label: 'YouTube' },
    { id: 5, label: 'Telegram' }
  ]

  const politicsList = [
    { id: 1, label: 'Пользовательское соглашение' },
    { id: 2, label: 'Политика конфиденциальности' },
    { id: 3, label: 'Политика использования файлов cookie' },
    { id: 4, label: 'Условия пробного периода' }
  ]

  return (
    <>
      <Header links={{menuList, submenuList, socialList}}/>
      <main>
        <Hero/>
        <Advantages/>
        <Offers/>
        <Program/>
        <App/>
        <Feedback/>
      </main>
      <Footer links={{menuList, submenuList, socialList, politicsList}}/>
    </>
  )
}

export default Main
