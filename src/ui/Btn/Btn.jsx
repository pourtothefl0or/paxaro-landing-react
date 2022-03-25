import React from 'react'
import styled, { css } from 'styled-components'

// --- constants ---
import { COLORS, TYPOGRAPHY } from '../../constants'

const Btn = ({className, children, ...props}) => {
  return (
    <StyledBtn className={className} {...props}>
      {children}
    </StyledBtn>
  )
}

const StyledBtn = styled.button`
  display: inline-block;
  border: 2px solid transparent;
  border-radius: var(--primary-radius);
  padding: 9px 16px;
  ${TYPOGRAPHY.caption2Semibold14}
  text-align: center;
  color: ${COLORS.white};
  background: ${COLORS.gradient};
  transition: all var(--primary-animation);
  transition-property: box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: var(--primary-shadow);
  }

  // xxl
  ${props => props.xxl && css`
    padding: 21px 24px;
    ${TYPOGRAPHY.subtitle1Bold24}
  `}

  @media (max-width: 1023px) {
    padding: 12px 26px;
    ${TYPOGRAPHY.caption2Semibold14}
  }
`

export default Btn
