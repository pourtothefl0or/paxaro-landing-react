import React from 'react'
import styled from 'styled-components'

// --- constants ---
import { COLORS, TYPOGRAPHY } from '../../../constants'

// --- components ---
import { Container } from '../../../components'

// --- ui ---
import { Btn } from '../../../ui'

// --- images ---
import heroImage from '../../../images/hero/hero-image.png'
import heroImage2x from '../../../images/hero/hero-image@2x.png'

const Hero = () => {
  return (
    <StyledHero>
      <HeroContainer>
        <HeroContent>
          <HeroTitle>
            Стань частью новой экономической реальности
          </HeroTitle>
          <HeroDescr>
            Инвестируй в криптовалюту и управляй цифровыми активами с помощью Smart Portfolio
          </HeroDescr>
          <Btn>Попробовать бесплатно</Btn>
        </HeroContent>
      </HeroContainer>
      <picture>
        <HeroImage src={heroImage} srcSet={`${heroImage2x} 2x`} alt="Paxaro logo"/>
      </picture>
    </StyledHero>
  )
}

const StyledHero = styled.section`
  position: relative;
  overflow: hidden;
  background-color: ${COLORS.white};
`

const HeroContainer = styled(Container)`
  padding-top: 100px;
  padding-bottom: 700px;

  @media (max-width: 1023px) {
    padding-top: 150px;
    padding-bottom: 300px;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroTitle = styled.h1`
  margin: 0 0 24px;
  max-width: 635px;
  ${TYPOGRAPHY.title1_Bold48}
  text-align: center;

  @media (max-width: 1023px) {
    margin-bottom: 14px;
    ${TYPOGRAPHY.subtitle1Bold24}
  }
`

const HeroDescr = styled.p`
  margin: 0 0 50px;
  max-width: 560px;
  ${TYPOGRAPHY.subtitle2Regular24}
  text-align: center;

  @media (max-width: 1023px) {
    margin-bottom: 32px;
    ${TYPOGRAPHY.body2Regular14}
  }
`

const HeroImage = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-45%);

  @media (max-width: 1023px) {
    max-width: 522px;
  }
`

export default Hero
