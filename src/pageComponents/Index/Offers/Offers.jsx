import React from 'react'
import styled from 'styled-components'

// --- constants ---
import { COLORS, TYPOGRAPHY } from '../../../constants'

// --- components ---
import { Container, Title } from '../../../components'

// --- ui ---
import { Btn } from '../../../ui'

// --- image ---
import offerItemCircle from '../../../images/offers/offer-item-circle.svg'

const Offers = () => {
  const offersList = [
    {
      id: 1,
      name: 'Advanced',
      price: '$1199',
      services: [
        'Ребалансировка',
        'Базовая стратегия ведения портфеля',
        '5 реферальных уровней',
        'Специальный раздел обучения Paxaro education',
        'i30 - index',
        'i50 - index',
        'i100 - index',
        'Кастомизированный index iCustom',
        'Привилегия участия в новых продуктах платформы ',
        'Возможность настройки базовых индексов'
      ]
    },
    {
      id: 2,
      name: 'Prime',
      price: '$740',
      services: [
        'Ребалансировка',
        'Базовая стратегия ведения портфеля',
        'i30 - index',
        '3 реферальных уровня',
        'Специальный раздел обучения Paxaro Education'
      ]
    },
  ]

  return (
    <StyledOffers>
      <OffersContainer>
        <Title
          subtitle="Предложения"
          title="Планы подписки"
        />
        <ul>
          {
            offersList.map((item) =>
              <OffersItem key={item.id}>
                <OffersItemHeader>
                  <OffersItemTitle>{item.name}</OffersItemTitle>
                  <OffersItemPrice>{item.price}</OffersItemPrice>
                  <OffersBtn xxl>Купить</OffersBtn>
                </OffersItemHeader>
                <OffersServices>
                  {
                    item.services.map((service, index) =>
                      <OffersServicesItem key={index}>{service}</OffersServicesItem>
                    )
                  }

                </OffersServices>
              </OffersItem>
            )
          }
        </ul>
      </OffersContainer>
    </StyledOffers>
  )
}

const StyledOffers = styled.section`
  background-color: ${COLORS.white};
`

const OffersContainer = styled(Container)`
  padding-top: 65px;
  padding-bottom: 65px;
`

const OffersItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 80px;
  }
`

const OffersItemHeader = styled.div`
  padding-bottom: 5px;
  border-bottom: var(--primary-border);

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }

  @media (max-width: 1023px) {
    display: grid;
    row-gap: 20px;
    align-items: center;
    grid-template-areas:
      "title title"
      "price btn";
    margin-bottom: 24px;
  }
`

const OffersItemTitle = styled.h3`
  margin: 0;
  ${TYPOGRAPHY.title0_Bold72}

  @media (max-width: 1023px) {
    grid-area: title;
    ${TYPOGRAPHY.title2_Bold40}
    text-align: center;
  }
`

const OffersItemPrice = styled.p`
  margin: 0 55px 0 auto;
  ${TYPOGRAPHY.title0_Bold72}

  @media (max-width: 1023px) {
    grid-area: price;
    justify-self: start;
    margin: 0;
    ${TYPOGRAPHY.title2_Bold40}
  }
`

const OffersBtn = styled(Btn)`
  @media (max-width: 1023px) {
    grid-area: btn;
    justify-self: end;
  }
`

const OffersServices = styled.ul`
`

const OffersServicesItem = styled.li`
  position: relative;
  padding-left: 44px;
  color: #999;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url(${offerItemCircle});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: translateY(-50%);
  }

  @media (min-width: 1024px) {
    ${TYPOGRAPHY.subtitle1Bold24}

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 1023px) {
    ${TYPOGRAPHY.caption1Semibold18}

    &:not(:last-child) {
      margin-bottom: 18px;
    }
  }
`

export default Offers
