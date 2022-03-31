import React from 'react'
import styled, { css } from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY, SECONDARY } from '../../../constants'
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
        <AdvantagesList>
          <AdvantagesListItem>
            <AdvantagesCard black>
              <AdvantageCardTitle>
                <span>Активы</span> <br/> хранятся <br/> на бирже
              </AdvantageCardTitle>
              <AdvantageCardDescr>
                Ваши деньги не хранятся у нас. Все активы размещены на официальной бирже. Она страхует их и шифрует данные. Взлом этих систем невозможен.
              </AdvantageCardDescr>
            </AdvantagesCard>
          </AdvantagesListItem>
          <AdvantagesListItem>
            <AdvantagesCard white>
              <AdvantageCardTitle>
                <span>Алгоритм</span> <br/> минимизирует <br/> риски
              </AdvantageCardTitle>
              <AdvantageCardDescr>
                Риски минимизированы. Наш алгоритм умеет учитывать все изменения курсов и рыночные тренды. Поэтому пакет постоянно диверсифицируется в соответствии с ситуацией на бирже.
              </AdvantageCardDescr>
            </AdvantagesCard>
          </AdvantagesListItem>
          <AdvantagesListItem>
            <AdvantagesCard green>
              <AdvantageCardTitle>
                <span>Доходность</span> <br/> зависит <br/> от сроков
              </AdvantageCardTitle>
              <AdvantageCardDescr>
                Доходность зависит от сроков. Чем дольше инвестиции находятся в обороте, тем лучше  алгоритм с ними работает. Практика показала, что инвестиции в долгую приносят большую прибыль.
              </AdvantageCardDescr>
            </AdvantagesCard>
          </AdvantagesListItem>
        </AdvantagesList>
      </AdvantagesContainer>
    </StyledAdvantages>
  )
}

const StyledAdvantages = styled.section`
  background-color: ${COLORS.white};
`

const AdvantagesContainer = styled(Container)`
  padding-top: ${PRIMARY.primaryVerticalIndent};
  padding-bottom: ${PRIMARY.primaryVerticalIndent};

  @media (max-width: 1023px) {
    padding-top: ${PRIMARY.primaryVerticalIndentSmall};
    padding-bottom: ${PRIMARY.primaryVerticalIndentSmall};
  }
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

const AdvantagesList = styled.ul`
  --card-width: 350px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-width), 1fr));
  gap: 20px;

  @media (max-width: 1023px) {
    --card-width: 300px;
  }
`

const AdvantagesListItem = styled.li``

const AdvantagesCard = styled.div.attrs({
  className: 'advantages-card'
})`
  position: relative;
  z-index: 1;
  border-radius: ${SECONDARY.secondaryRadius};
  padding: 40px 40px;
  height: 100%;
  min-height: 390px;

  .advantages-card {
    &__title,
    &__descr {
      transition: all ${PRIMARY.primaryAnimation};
      transition-property: opacity, visibility;
    }
  }

  // black
  ${props => props.black && css`
    color: ${COLORS.white};
    background-color: ${COLORS.black};

    .advantages-card__title::after,
    .advantages-card__title span::after {
      background-color: ${COLORS.green};
    }
  `}

  // white
  ${props => props.white && css`
    color: ${COLORS.black};
    background-color: ${COLORS.lightCard};

    .advantages-card__title::after,
    .advantages-card__title span::after {
      background-color: ${COLORS.green};
    }
  `}

  // green
  ${props => props.green && css`
    color: ${COLORS.white};
    background-color: ${COLORS.green};

    .advantages-card__title::after,
    .advantages-card__title span::after {
      background-color: ${COLORS.black};
    }
  `}

  @media (min-width: 1024px) {
    span {
      position: relative;
      z-index: 1;

      &::after {
        content: '';
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

    .advantages-card__title {
      position: absolute;
      top: 40px;
      left: 40px;
    }

    &:hover {
      .advantages-card {
        &__title {
          opacity: 0;
          visibility: hidden;
        }

        &__descr {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }

  @media (max-width: 1023px) {
    ${TYPOGRAPHY.subtitle1Bold24}
  }
`

const AdvantageCardTitle = styled.p.attrs({
  className: 'advantages-card__title'
})`
  display: inline-block;
  margin: 0;
  ${TYPOGRAPHY.title3Bold36}
  color: inherit;

  @media (max-width: 1023px) {
    position: relative;
    z-index: 1;
    margin-bottom: 25px;
    ${TYPOGRAPHY.subtitle1Bold24}

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -10px;
      z-index: -1;
      display: inline-block;
      width: calc(100% + 20px);
      height: 100%;
      background-color: ${COLORS.green};
    }

    br {
      display: none;
    }
  }
`

const AdvantageCardDescr = styled.p.attrs({
  className: 'advantages-card__descr'
})`
  margin: 0;
  ${TYPOGRAPHY.subtitle2Regular24}

  @media (min-width: 1024px) {
    opacity: 0;
    visibility: hidden;
  }

  @media (max-width: 1023px) {
    ${TYPOGRAPHY.body1Regular18}
  }
`

export default Advantages
