import React from 'react'
import styled from 'styled-components'
import { Link } from '../'

const SubMenu = ({className}) => {
  let menuList = [
    { id: 1, label: 'История' },
    { id: 2, label: 'Преимущества' },
    { id: 3, label: 'База знаний' },
    { id: 4, label: 'Как работает?' },
    { id: 5, label: 'Подписка' },
    { id: 6, label: 'Как начать?' },
  ]

  return (
    <StyledSubMenu className={className}>
      {
        menuList.map(item =>
          <li key={item.id}>
            <Link>{item.label}</Link>
          </li>
        )
      }

    </StyledSubMenu>
  )
}

const StyledSubMenu = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 5px;

  li:not(:last-child) {
    margin-right: 30px;
  }
`

export default SubMenu
