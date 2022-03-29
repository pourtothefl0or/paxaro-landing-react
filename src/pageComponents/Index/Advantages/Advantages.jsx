import React from 'react'
import styled, { css } from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY } from '../../../constants'
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
            <AdvantageCardsTitle>
              <span>Активы</span> <br/> хранятся <br/> на бирже
            </AdvantageCardsTitle>
            <AdvantageCardsDescr>
              Ваши деньги не хранятся у нас. Все активы размещены на официальной бирже. Она страхует их и шифрует данные. Взлом этих систем невозможен.
            </AdvantageCardsDescr>
          </AdvantagesCardsItem>
          <AdvantagesCardsItem white>
            <AdvantageCardsTitle>
              <span>Алгоритм</span> <br/> минимизирует <br/> риски
            </AdvantageCardsTitle>
            <AdvantageCardsDescr>
              Риски минимизированы. Наш алгоритм умеет учитывать все изменения курсов и рыночные тренды. Поэтому пакет постоянно диверсифицируется в соответствии с ситуацией на бирже.
            </AdvantageCardsDescr>
          </AdvantagesCardsItem>
          <AdvantagesCardsItem green>
            <AdvantageCardsTitle>
              <span>Доходность</span> <br/> зависит <br/> от сроков
            </AdvantageCardsTitle>
            <AdvantageCardsDescr>
              Доходность зависит от сроков. Чем дольше инвестиции находятся в обороте, тем лучше  алгоритм с ними работает. Практика показала, что инвестиции в долгую приносят большую прибыль.
            </AdvantageCardsDescr>
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
    --card-width: 300px;
  }
`

const AdvantagesCardsItem = styled.li`
  // default: black
  border-radius: ${PRIMARY.primaryRadius};
  padding: 40px 40px;
  min-height: 390px;
  color: ${COLORS.white};
  background-color: ${COLORS.black};

  p {
    transition: all ${PRIMARY.primaryAnimation};
    transition-property: opacity, visibility;
  }

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

  @media (min-width: 1024px) {
    &:hover {
      p:first-child {
        display: none;
        opacity: 0;
        visibility: hidden;
      }

      p:last-child {
        display: block;
        opacity: 1;
        visibility: visible;
      }
    }
  }

  @media (max-width: 1023px) {
    ${TYPOGRAPHY.subtitle1Bold24}

    span::after {
      display: none;
    }
  }
`

const AdvantageCardsTitle = styled.p`
  margin: 0;
  ${TYPOGRAPHY.title3Bold36}
  color: inherit;

  @media (max-width: 1023px) {
    margin-bottom: 25px;
    ${TYPOGRAPHY.subtitle1Bold24}

    br {
      display: none;
    }
  }
`

const AdvantageCardsDescr = styled.p`
  margin: 0;
  ${TYPOGRAPHY.subtitle2Regular24}

  @media (min-width: 1024px) {
    display: none;
    opacity: 0;
    visibility: hidden;
  }

  @media (max-width: 1023px) {
    ${TYPOGRAPHY.body1Regular18}
  }
`

export default Advantages
