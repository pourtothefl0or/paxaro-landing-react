import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../constants'
import { Container, Title, Descr } from '../../../components'

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

export default Program
