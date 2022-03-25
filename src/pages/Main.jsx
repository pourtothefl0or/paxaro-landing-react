import React from 'react'
import '../styles/style.css'
import { Header, Footer } from '../components'
import { Hero, Advantages, Offers, Program, App, Feedback } from '../pageComponents/Index'

const Main = () => {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Advantages/>
        <Offers/>
        <Program/>
        <App/>
        <Feedback/>
      </main>
      <Footer/>
    </>
  )
}

export default Main
