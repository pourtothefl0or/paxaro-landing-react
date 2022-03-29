import React from 'react'
import styled, { css } from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY, SECONDARY } from '../../../constants'
import { Container } from '../../../components'
import appLogo from '../../../assets/images/App/app-logo.svg'
import appStoreWhite from '../../../assets/images/Icons/app-store-white.svg'
import googlePlayWhite from '../../../assets/images/Icons/google-play-white.svg'
import appPhone from '../../../assets/images/App/app-phone.png'
import appPhone2x from '../../../assets/images/App/app-phone@2x.png'

const App = () => {
  const appsList = [
    { id: 1, image: appStoreWhite, alt: "" },
    { id: 2, image: googlePlayWhite, alt: "" },
  ]

  return (
    <StyledApp>
      <AppContainer>
        <AppCard shadow>
          <picture>
            <AppCardImage src={appPhone} srcSet={`${appPhone2x} 2x`} alt=""/>
          </picture>
        </AppCard>
        <AppCard green>
          <img src={appLogo} alt=""/>
          <AppCardDesrc>
            Мобильное приложение
          </AppCardDesrc>
          <AppsIcons>
            {
              appsList.map((item) =>
              <AppsLink href="#" key={item.id}>
                <img src={item.image} alt={item.alt}/>
              </AppsLink>
              )
            }
          </AppsIcons>
        </AppCard>
      </AppContainer>
    </StyledApp>
  )
}

const StyledApp = styled.section`
  background-color: ${COLORS.white};
`

const AppContainer = styled(Container)`
  --grid-min: 500px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--grid-min), 1fr));
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 65px;

  @media (max-width: 1023px) {
    --grid-min: 300px;
  }
`

const AppCard = styled.div`
  // default: black
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${SECONDARY.secondaryRadius};
  padding: 20px;
  height: 790px;
  background-color: ${COLORS.black};

  // green
  ${props => props.green && css`
    background-color: ${COLORS.green};
  `}

  // shadow
  ${props => props.shadow && css`
    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 25%;
      bottom: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 88%);
    }
  `}

  @media (max-width: 1023px) {
    padding: 40px;
    height: 335px;
  }
`

const AppCardImage = styled.img`
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1023px) {
    bottom: -150px;
    max-width: 226px;
  }
`

const AppCardDesrc = styled.p`
  margin: 20px 0 80px;
  ${TYPOGRAPHY.subtitle2Regular24}
  color: ${COLORS.white};

  @media (max-width: 1023px) {
    margin: 15px 0 30px;
    ${TYPOGRAPHY.subtitle3Bold18}
  }
`

const AppsIcons = styled.div`
  display: flex;
  gap: 18px 15px;
`

const AppsLink = styled.a`
  transition: all ${PRIMARY.primaryAnimation};
  transition-property: transform;

  &:focus,
  &:hover {
    transform: translateY(-5px);
  }
`

export default App
