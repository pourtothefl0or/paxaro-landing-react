import React from 'react'

// --- styles ---
import '../styles/common.scss'

// --- constants ---
import { VARS } from '../constants'

// --- components ---
import { Header, Footer } from '../components'

// --- page components ---
import { Hero, Advantages, Offers, Program, App, Feedback } from '../pageComponents/Index'

const Main = () => {
  return (
    <>
      <VARS/>
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
