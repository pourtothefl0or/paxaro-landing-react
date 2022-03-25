import React, { useState } from 'react'
import styled from 'styled-components'

// --- constants ---
import { COLORS } from '../../constants'

const MenuBtn = ({className}) => {
  return (
    <StyledMenuBtn className={className}>
      <span></span>
      <span></span>
      <span></span>
    </StyledMenuBtn>
  )
}

const StyledMenuBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 4px;
  border: 0;
  width: 24px;
  height: 24px;
  background: transparent;
  transition: all var(--primary-animation);
  transition-property: width, height;
  cursor: pointer;

  span {
    display: inline-block;
    border-radius: 8px;
    width: 18px;
    height: 2px;
    background-color: ${COLORS.white};
    transition: all var(--primary-animation);
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

export default MenuBtn
