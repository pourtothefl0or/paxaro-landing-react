import React from 'react'
import styled from 'styled-components'

// --- constants ---
import { COLORS, TYPOGRAPHY } from '../../constants'

// --- images ---
import toTop from '../../images/icons/to-top.svg'

const ToTop = ({className, children}) => {
  return (
    <StyledToTop className={className}>
      <span>{children}</span>
      <img src={toTop} alt="" />
    </StyledToTop>
  )
}

const StyledToTop = styled.button`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;

  span {
    ${TYPOGRAPHY.caption2Semibold14}
    color: ${COLORS.white};
    transition: all var(--primary-animation);
    transition-property: color;
  }

  &:hover {
    span {
      color: ${COLORS.green};
    }
  }

  @media (max-width: 1023px) {
    span {
      display: none;
    }
  }
`

export default ToTop
