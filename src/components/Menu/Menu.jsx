import React from 'react'
import styled from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY } from '../../constants'

const Menu = ({className, links}) => {
  return (
    <StyledMenu className={className}>
      {
        links.map(item =>
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

const Link = styled.a`
  ${TYPOGRAPHY.caption2Semibold14}
  color: ${COLORS.white};
  transition: all ${PRIMARY.primaryAnimation};
  transition-property: color;
  cursor: pointer;

  &:focus,
  &:hover {
    color: ${COLORS.green};
  }
`

export default Menu
