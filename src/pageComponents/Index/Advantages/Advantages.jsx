import React from 'react'
import styled from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY, SECONDARY } from '../../../constants'
import { Container, Title } from '../../../components'

const Advantages = () => {
  const advantagesList = [
    {
      id: 1,
      title: 'Активы хранятся на бирже',
      descr: 'Ваши деньги не хранятся у нас. Все активы размещены на официальной бирже. Она страхует их и шифрует данные. Взлом этих систем невозможен.',
      textColor: COLORS.white,
      bgColor: COLORS.black,
    },
    {
      id: 2,
      title: 'Алгоритм минимизирует риски',
      descr: 'Риски минимизированы. Наш алгоритм умеет учитывать все изменения курсов и рыночные тренды. Поэтому пакет постоянно диверсифицируется в соответствии с ситуацией на бирже.',
      textColor: COLORS.black,
      bgColor: COLORS.lightCard
    },
    {
      id: 3,
      title: 'Доходность зависит от сроков',
      descr: 'Доходность зависит от сроков. Чем дольше инвестиции находятся в обороте, тем лучше  алгоритм с ними работает. Практика показала, что инвестиции в долгую приносят большую прибыль.',
      textColor: COLORS.white,
      bgColor: COLORS.green,
    },
  ]

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
          {
            advantagesList.map(item =>
              <Card key={item.id}>
                <CardInner $bgColor={item.bgColor} $textColor={item.textColor}>
                  <CardFront>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescr>{item.descr}</CardDescr>
                  </CardFront>
                  <CardBack>
                    <CardDescr>{item.descr}</CardDescr>
                  </CardBack>
                </CardInner>
              </Card>
            )
          }
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
`

const Card = styled.li`
  width: 100%;
  min-height: 380px;

  @media (min-width: 1024px) {
    &:hover {
      .card__inner {
        transform: rotateY(180deg);
      }
    }
  }
`

const CardInner = styled.div.attrs({
  className: 'card__inner'
})`
  width: 100%;
  height: 100%;

  .card {
    &__front,
    &__back {
      border-radius: ${SECONDARY.secondaryRadius};
      padding: 40px;
      width: 100%;
      height: 100%;
      background-color: ${props => props.$bgColor};
    }

    &__title,
    &__descr {
      color: ${props => props.$textColor};
    }
  }

  @media (min-width: 1024px) {
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.6s;
    transition-property: transform;

    .card {
      &__front,
      &__back {
        position: absolute;
        top: 0;
        left: 0;
        backface-visibility: hidden;
      }
    }
  }
`

const CardFront = styled.div.attrs({
  className: 'card__front'
})`
  @media (min-width: 1024px) {
    .card__descr {
      display: none;
    }
  }
`

const CardBack = styled.div.attrs({
  className: 'card__back'
})`
  transform: rotateY(180deg);

  @media (max-width: 1023px) {
    display: none;
  }
`

const CardTitle = styled.p.attrs({
  className: 'card__title'
})`
  margin: 0;
  color: ${COLORS.white};

  @media (min-width: 1024px) {
    ${TYPOGRAPHY.title2Bold40}
  }

  @media (max-width: 1023px) {
    margin-bottom: 20px;
    ${TYPOGRAPHY.subtitle1Bold24}
  }
`

const CardDescr = styled.p.attrs({
  className: 'card__descr'
})`
  margin: 0;
  color: ${COLORS.white};

  @media (min-width: 1024px) {
    ${TYPOGRAPHY.subtitle2Regular24}
  }

  @media (max-width: 1023px) {
    ${TYPOGRAPHY.body1Regular18}
  }
`

export default Advantages
