import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY } from '../../../constants'
import { Container, Title, Descr } from '../../../components'
import { Radio, Range } from '../../../ui'

const Program = () => {
  const radioList = [
    {
      id: 1,
      name: 'yourPlan',
      value: 'prime',
      label: 'Prime'
    },
    {
      id: 2,
      name: 'yourPlan',
      value: 'advanced',
      label: 'Advanced'
    },
  ]

  const radioDefaultValue = radioList[0].value
  const [radioValue, setRadioValue] = useState(radioDefaultValue)

  const getChildValue = el => console.log(el)
  // const [rangeValue, setRangeValue] = useState(3)

  const calcYourBonus = () => {
    let point = 240
    let friends = 3

    return point * friends
  }

  const calcSumBonus = () => {
    let bonus = calcYourBonus()
    let point = 290
    let friends = 3
    let coefficient = radioValue === radioDefaultValue ? 2 : 4

    return bonus + friends * (coefficient * point)
  }

  return (
    <StyledProgram>
      <ProgramContainer>
        <Title
          subtitle="Партнерская программа"
          title="Приглашайте друзей и получайте бонусы"
        />
        <Descr>
          Всего есть 5 реферальных уровней — вы получаете процент с каждого приведенного друга, а также с их друзей. Размер вознаграждения зависит от вашего плана подписки и количества приглашенных пользователей.
        </Descr>
        <ProgramForm>
          <ProgramPlan>
            <FormTitle>Ваш план подписки</FormTitle>
            <FormRow>
              {
                radioList.map((item) =>
                  <Radio
                    name={item.name}
                    value={item.value}
                    label={item.label}
                    key={item.id}
                    checked={radioValue === item.value ? true : false}
                    onChange={() => setRadioValue(item.value)}
                  />
                )
              }
            </FormRow>
          </ProgramPlan>
          <ProgramFriends>
            <FormTitle>Количество друзей</FormTitle>
              <Range childValue={getChildValue}/>
          </ProgramFriends>
          <ProgramBonus>
            <ProgramBonusTitle>
              Ваш бонус
              <ProgramBonusScore green>${calcYourBonus()}</ProgramBonusScore>
            </ProgramBonusTitle>
            <ProgramBonusTitle>
              Общий бонус
              <ProgramBonusScore>${calcSumBonus()}</ProgramBonusScore>
            </ProgramBonusTitle>
          </ProgramBonus>
        </ProgramForm>
      </ProgramContainer>
    </StyledProgram>
  )
}

const StyledProgram = styled.section`
  background-color: ${COLORS.white};
`

const ProgramContainer = styled(Container)`
  padding-top: ${PRIMARY.primaryVerticalIndent};

  @media (max-width: 1023px) {
    padding-top: ${PRIMARY.primaryVerticalIndentSmall};
  }
`

const ProgramForm = styled.form`
  border-radius: 60px;
  padding: 60px 105px;
  background-color: ${COLORS.darkBlack};

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "plan friends"
      "bonus bonus";
    gap: 50px 200px;
  }

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    padding: 40px 20px;
  }
`

const ProgramPlan = styled.div`
  @media (min-width: 1024px) {
    grid-area: plan;
  }
`

const ProgramFriends = styled.div`
  @media (min-width: 1024px) {
    grid-area: friends;
  }
`

const ProgramBonus = styled.div`
  grid-area: bonus;
  display: flex;
  align-items: center;
  column-gap: 110px;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: baseline;
    row-gap: 10px;
    margin-top: 0;
  }
`

const FormTitle = styled.h3`
  margin: 0 0 50px;
  ${TYPOGRAPHY.subtitle1Bold24}
  color: ${COLORS.white};

  @media (max-width: 1023px) {
    margin-bottom: 30px;
    ${TYPOGRAPHY.subtitle3Bold18}
  }
`

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px 100px;

  @media (max-width: 1023px) {
    column-gap: 50px;
  }
`

const ProgramBonusTitle = styled.p`
  margin: 0;
  ${TYPOGRAPHY.subtitle1Bold24}
  color: ${COLORS.white};

  @media (max-width: 1023px) {
    display: flex;
    align-items: end;
    width: 100%;
    ${TYPOGRAPHY.subtitle3Bold18}
  }
`

const ProgramBonusScore = styled.span`
  padding-left: 30px;
  ${TYPOGRAPHY.title2Bold40}
  color: ${COLORS.white};

  // green
  ${props => props.green && css`
    color: ${COLORS.green}
  `}

  @media (max-width: 1023px) {
    margin-left: auto;
    ${TYPOGRAPHY.subtitle1Bold24}
  }
`

export default Program
