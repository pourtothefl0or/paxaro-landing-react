import React from 'react'
import styled from 'styled-components'
import { Link } from '../'

const Menu = ({className}) => {
  let menuList = [
    { id: 1, label: 'О продукте' },
    { id: 2, label: 'Блог' },
    { id: 3, label: 'О компании' }
  ]

  return (
    <StyledMenu className={className}>
      {
        menuList.map(item =>
          <li key={item.id}>
            <Link>{item.label}</Link>
          </li>
        )
      }
    </StyledMenu>
  )
}

const StyledMenu = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 5px;

  li:not(:last-child) {
    margin-right: 30px;
  }
`

export default Menu
