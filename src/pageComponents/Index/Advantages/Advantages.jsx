import React from 'react'
import styled, { css } from 'styled-components'

// --- constants ---
import { COLORS, TYPOGRAPHY } from '../../../constants'

// --- components ---
import { Container, Title } from '../../../components'

const Advantages = () => {
  return (
    <StyledAdvantages>
      <AdvantagesContainer>
        <Title
          subtitle="Преимущества"
          title="Почему мы уверены в Paxaro App?"
        />
        <AdvantagesDescr>
          Мы проверили инструмент на реальных инвестициях - он позволяет управлять активами просто и быстро
        </AdvantagesDescr>
        <AdvantagesCards>
          <AdvantagesCardsItem>
            <span>Активы</span> <br/> хранятся <br/> на бирже
          </AdvantagesCardsItem>
          <AdvantagesCardsItem white>
          <span>Алгоритм</span> <br/> минимизирует <br/> риски
          </AdvantagesCardsItem>
          <AdvantagesCardsItem green>
            <span>Доходность</span> <br/> зависит <br/> от сроков
          </AdvantagesCardsItem>
        </AdvantagesCards>
      </AdvantagesContainer>
    </StyledAdvantages>
  )
}

const StyledAdvantages = styled.section`
  background-color: ${COLORS.white};
`

const AdvantagesContainer = styled(Container)`
  padding-top: 130px;
  padding-bottom: 65px;
`

const AdvantagesDescr = styled.p`
  margin: 0 auto 110px;
  max-width: 790px;
  ${TYPOGRAPHY.subtitle2Regular24}
  text-align: center;

  @media (max-width: 1023px) {
    margin-bottom: 40px;
    ${TYPOGRAPHY.body2Regular14}
  }
`

const AdvantagesCards = styled.ul`
  --card-width: 350px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-width), 1fr));
  gap: 20px;

  @media (max-width: 1023px) {
    --card-width: 250px;
  }
`

const AdvantagesCardsItem = styled.li`
  // default: black
  border-radius: var(--secondary-radius);
  padding: 40px 40px 200px;
  ${TYPOGRAPHY.title3_Bold36}
  color: ${COLORS.white};
  background-color: ${COLORS.black};

  span {
    position: relative;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -10px;
      z-index: -1;
      display: inline-block;
      width: calc(100% + 20px);
      height: 100%;
      background-color: ${COLORS.green};
    }
  }

  // white
  ${props => props.white && css`
    color: ${COLORS.black};
    background-color: ${COLORS.lightCard};

    span::after {
      background-color: ${COLORS.green};
    }
  `}

  // green
  ${props => props.green && css`
    color: ${COLORS.white};
    background-color: ${COLORS.green};

    span::after {
      background-color: ${COLORS.black};
    }
  `}

  @media (max-width: 1023px) {
    padding-bottom: 130px;
    ${TYPOGRAPHY.subtitle1Bold24}
  }
`

export default Advantages
