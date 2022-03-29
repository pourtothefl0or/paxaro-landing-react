import React from 'react'
import styled from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY } from '../../../constants'
import { Container, Title, Descr } from '../../../components'
import { Input, Button } from '../../../ui'
import { useForm } from 'react-hook-form';

const Feedback = () => {
  const {register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <StyledFeedback>
      <FeedbackContainer>
        <Title
          subtitle="Обратная связь"
          title="Начните инвестировать с Paxaro App"
        />
        <Descr>
          Заполните короткую форму и мы с вами свяжемся.
        </Descr>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FeedbackFormWrapper>
            <Input
              placeholder="Имя*"
              type="text"
              {...register('firstName', {
                required: true
              })}
            />
            <Input
              placeholder="Фамилия"
              type="text"
              {...register('lastName')}
            />
            <Input
              placeholder="Ваш e-mail*"
              type="email"
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+$/i
              })}
            />
            <Input
              placeholder="Ваш номер"
              type="tel"
              {...register('tel')}
            />
            <FeedbackAlert>
              Нажимая на кнопку, вы даете согласие на <a href="#">обработку персональных данных</a> и соглашаетесь с <a href="#">политикой конфиденциальности</a>
            </FeedbackAlert>
            <FeedbackButton xxl>Отправить форму</FeedbackButton>
          </FeedbackFormWrapper>
        </form>
      </FeedbackContainer>
    </StyledFeedback>
  )
}

const StyledFeedback = styled.section`
  background-color: ${COLORS.white};
`

const FeedbackContainer = styled(Container)`
  padding-top: 65px;
  padding-bottom: 65px;
`

const FeedbackFormWrapper = styled.div`
  --grid-columns: repeat(2, 1fr);

  display: grid;
  grid-template-columns: var(--grid-columns);
  gap: 40px 110px;

  @media (max-width: 1023px) {
    --grid-columns: 1fr;
    row-gap: 30px;

    button {
      justify-self: center;
    }
  }
`

const FeedbackAlert = styled.p`
  justify-self: start;
  margin: 0;
  color: ${COLORS.darkGray};
  ${TYPOGRAPHY.caption3Semibold12}

  a {
    color: inherit;
    text-decoration: underline;
    transition: all ${PRIMARY.primaryAnimation};
    transition-property: color;

    &:focus,
    &:hover {
      color: ${COLORS.green};
    }
  }
`

const FeedbackButton = styled(Button)`
  justify-self: end;
`

export default Feedback
