import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../constants'
import { Link } from '../'

const Politics = ({className}) => {
  let politicsList = [
    { id: 1, label: 'Пользовательское соглашение' },
    { id: 2, label: 'Политика конфиденциальности' },
    { id: 3, label: 'Политика использования файлов cookie' },
    { id: 4, label: 'Условия пробного периода' }
  ]

  return (
    <StyledPolitics className={className}>
      {
        politicsList.map(item =>
          <li key={item.id}>
            <Link>{item.label}</Link>
          </li>
        )
      }

    </StyledPolitics>
  )
}

const StyledPolitics = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 5px;

  li:not(:last-child) {
    margin-right: 20px;
  }

  @media (min-width: 1024px) {
    li:not(:last-child) {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        display: inline-block;
        width: 1px;
        height: 100%;
        top: 50%;
        right: -10px;
        background-color: ${COLORS.white};
        transform: translateY(-50%);
      }
    }
  }
`

export default Politics
