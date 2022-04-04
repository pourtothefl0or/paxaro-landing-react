import React from 'react'
import styled from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY } from '../../../constants'
import { Container } from '../../../components'
import { Link } from '../../../ui'
import heroImage from '../../../assets/images/Hero/hero-image.png'
import heroImage2x from '../../../assets/images/Hero/hero-image@2x.png'

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
          <Link href="#" xxl>Попробовать бесплатно</Link>
        </HeroContent>
      </HeroContainer>
      <picture>
        <HeroImage src={heroImage} srcSet={`${heroImage2x} 2x`} alt="Paxaro hero cover"/>
      </picture>
    </StyledHero>
  )
}

const StyledHero = styled.section`
  position: relative;
  overflow: hidden;
  background-color: ${COLORS.white};
  padding-bottom: ${PRIMARY.primaryVerticalIndent};

  @media (max-width: 1023px) {
    padding-top: ${PRIMARY.primaryVerticalIndentSmall};
  }
`

const HeroContainer = styled(Container)`
  padding-top: ${PRIMARY.primaryVerticalIndent};
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroTitle = styled.h1`
  margin: 0 0 24px;
  max-width: 635px;
  ${TYPOGRAPHY.title1Bold48}
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
  display: block;
  margin: 55px auto 0;

  @media (max-width: 1023px) {
    margin-top: 32px;
    padding-left: ${PRIMARY.primaryHorizontalIndent};
    max-width: none;
    width: 520px;
  }
`

export default Hero
