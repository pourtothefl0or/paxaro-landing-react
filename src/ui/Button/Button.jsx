import React from 'react'
import styled, { css } from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY } from '../../constants'

const Button = ({className, children, ...props}) => {
  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: inline-block;
  border: 2px solid transparent;
  border-radius: ${PRIMARY.primaryRadius};
  padding: 9px 16px;
  ${TYPOGRAPHY.caption2Semibold14}
  text-align: center;
  color: ${COLORS.white};
  background: ${COLORS.greenGradient};
  transition: all ${PRIMARY.primaryAnimation};
  transition-property: box-shadow;
  cursor: pointer;

  // xxl
  ${props => props.xxl && css`
    @media (min-width: 1024px) {
      border-radius: 16px;
      padding: 21px 25px;
      ${TYPOGRAPHY.subtitle1Bold24}
    }

    @media (max-width: 1023px) {
      padding: 12px 26px;
    }
  `}

  // border
  ${props => props.border && css`
    border: 2px solid transparent;
    border-color: ${COLORS.green};
    padding: 9px 16px;
    color: ${COLORS.white};
    background: transparent;
  `}

  &:focus,
  &:hover {
    box-shadow: ${PRIMARY.primaryShadow};
  }
`

export default Button
