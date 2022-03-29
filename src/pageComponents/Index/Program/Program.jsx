import React from 'react'
import styled from 'styled-components'
import { COLORS, TYPOGRAPHY } from '../../../constants'
import { Container, Title, Descr } from '../../../components'
import { Radio, CustomRange } from '../../../ui'

const Program = () => {
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
              <Radio text="Prime" name="plan"/>
              <Radio text="Advanced" name="plan"/>
            </FormRow>
          </ProgramPlan>
          <ProgramFriends>
            <FormTitle>Количество друзей</FormTitle>
            <FormRow>
              <CustomRange/>
            </FormRow>
          </ProgramFriends>
          <ProgramBonus>
            <ProgramBonusTitle>
              Ваш бонус
              <ProgramBonusScore>$876</ProgramBonusScore>
            </ProgramBonusTitle>
            <ProgramBonusTitle>
              Общий бонус
              <ProgramBonusScore>$16,4562</ProgramBonusScore>
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
  padding-top: 65px;
  padding-bottom: 65px;
`

const ProgramForm = styled.form`
  column-gap: 200px;
  border-radius: 60px;
  padding: 60px 105px;
  background-color: ${COLORS.darkBlack};

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "plan friends"
      "bonus bonus";
  }

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    padding: 40px 20px;
  }
`

const ProgramPlan = styled.div`
  grid-area: plan;
`

const ProgramFriends = styled.div`
  grid-area: friends;
`

const ProgramBonus = styled.div`
  grid-area: bonus;
  display: flex;
  align-items: center;
  column-gap: 110px;
  margin-top: 50px;

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
    margin-bottom: 20px;
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

  @media (max-width: 1023px) {
    margin-left: auto;
    ${TYPOGRAPHY.subtitle1Bold24}
  }
`

export default Program
