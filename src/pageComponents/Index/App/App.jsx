import React from 'react'
import styled, { css } from 'styled-components'

// --- constants ---
import { COLORS, TYPOGRAPHY } from '../../../constants'

// --- components ---
import { Container, AppsWhite } from '../../../components'

// --- images ---
import logo from '../../../images/app/logo.svg'
import appPhone from '../../../images/app/app-phone.png'
import appPhone2x from '../../../images/app/app-phone@2x.png'

const App = () => {
  return (
    <StyledApp>
      <AppContainer>
        <AppCard shadow>
          <picture>
            <AppCardImage src={appPhone} srcSet={`${appPhone2x} 2x`} alt=""/>
          </picture>
        </AppCard>
        <AppCard green>
          <img src={logo} alt=""/>
          <AppCardDesrc>
            Мобильное приложение
          </AppCardDesrc>
          <AppsWhite/>
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
  border-radius: var(--secondary-radius);
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
`

const AppCardImage = styled.img`
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
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

export default App
