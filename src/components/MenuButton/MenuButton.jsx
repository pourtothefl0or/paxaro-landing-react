import React from 'react'
import styled from 'styled-components'
import { COLORS, PRIMARY } from '../../constants'

const MenuButton = ({className}) => {
  return (
    <StyledMenuButton className={className}>
      <span></span>
      <span></span>
      <span></span>
    </StyledMenuButton>
  )
}

const StyledMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 4px;
  border: 0;
  width: 24px;
  height: 24px;
  background: transparent;
  transition: all ${PRIMARY.primaryAnimation};
  transition-property: width, height;
  cursor: pointer;

  span {
    display: inline-block;
    border-radius: 8px;
    width: 18px;
    height: 2px;
    background-color: ${COLORS.white};
    transition: all ${PRIMARY.primaryAnimation};
    transition-property: width, opacity, visibility, transform;
  }

  &.is-active {
    span {
      &:nth-of-type(1) {
        transform: translateY(6px) rotate(45deg);
      }

      &:nth-of-type(2) {
        opacity: 0;
        visibility: hidden;
      }

      &:nth-of-type(3) {
        transform: translateY(-6px) rotate(135deg);
      }
    }
  }
`

export default MenuButton
