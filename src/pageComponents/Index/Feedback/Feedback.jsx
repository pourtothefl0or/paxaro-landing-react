import React from 'react'
import styled from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY, SECONDARY } from '../../../constants'
import { Container, Title, Descr } from '../../../components'
import { Input, Button } from '../../../ui'
import { useForm } from 'react-hook-form';

const Feedback = () => {
  const {register, handleSubmit, reset, formState:{errors}} = useForm();
  const onSubmit = data => {
    console.log(data)
    reset()
  }

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
              labelClassName={errors.firstName && 'is-error'}
            />
            <Input
              placeholder="Фамилия"
              type="text"
              {...register('lastName')}
              labelClassName={errors.lastName && 'is-error'}
            />
            <Input
              placeholder="Ваш e-mail*"
              type="email"
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+$/i
              })}
              labelClassName={errors.email && 'is-error'}
            />
            <Input
              placeholder="Ваш номер"
              type="tel"
              {...register('phoneNumber')}
              labelClassName={errors.phoneNumber && 'is-error'}
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

  // return (
  //   <FeedbackSuccess>
  //     <FeedbackSuccessText>
  //       Форма успешно отправлена, в&nbsp;ближайшее время с&nbsp;вами свяжутся!
  //     </FeedbackSuccessText>
  //   </FeedbackSuccess>
  // )
}

const FeedbackSuccess = styled.div`
  margin: auto;
  border-radius: ${SECONDARY.secondaryRadius};
  padding: 70px 90px;
  max-width: 615px;
  background-color: ${COLORS.lightCard};
`

const FeedbackSuccessText = styled.p`
  margin: 0;
  ${TYPOGRAPHY.subtitle1Bold24}
  text-align: center;
`

const StyledFeedback = styled.section`
  background-color: ${COLORS.white};
`

const FeedbackContainer = styled(Container)`
  padding-top: ${PRIMARY.primaryVerticalIndent};
  padding-bottom: calc(${PRIMARY.primaryVerticalIndent} * 2);
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
