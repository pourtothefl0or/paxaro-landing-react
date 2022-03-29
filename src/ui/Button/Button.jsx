import React from 'react'
import styled, { css } from 'styled-components'

// --- constants ---
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
  border: 0;
  border-radius: ${PRIMARY.primaryRadius};
  padding: 11px 18px;
  ${TYPOGRAPHY.caption2Semibold14}
  text-align: center;
  color: ${COLORS.white};
  background: ${COLORS.greenGradient};
  transition: all ${PRIMARY.primaryAnimation};
  transition-property: box-shadow;
  cursor: pointer;

  &:focus,
  &:hover {
    box-shadow: ${PRIMARY.primaryShadow};
  }

  // xxl
  ${props => props.xxl && css`
    border-radius: 16px;
    padding: 23px 27px;
    ${TYPOGRAPHY.subtitle1Bold24}
  `}

  @media (max-width: 1023px) {
    padding: 15px 28px;
    ${TYPOGRAPHY.caption2Semibold14}
  }
`

export default Button
