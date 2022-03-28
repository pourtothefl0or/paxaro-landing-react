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
  border: 2px solid transparent;
  border-radius: ${PRIMARY.primaryRadius};
  padding: 9px 16px;
  ${TYPOGRAPHY.caption2Semibold14}
  text-align: center;
  color: ${COLORS.white};
  background: ${COLORS.gradient};
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
    padding: 21px 24px;
    ${TYPOGRAPHY.subtitle1Bold24}
  `}

  @media (max-width: 1023px) {
    padding: 12px 26px;
    ${TYPOGRAPHY.caption2Semibold14}
  }
`

export default Button
