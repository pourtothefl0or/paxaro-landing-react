import React from 'react'
import styled from 'styled-components'

// --- constants ---
import { COLORS, TYPOGRAPHY } from '../../constants'

const Link = ({className, children}) => {
  return (
    <StyledLink className={className} href="#">{children}</StyledLink>
  )
}

const StyledLink = styled.a`
  ${TYPOGRAPHY.caption2Semibold14}
  color: ${COLORS.white};
  transition: all var(--primary-animation);
  transition-property: color;

  &:hover {
    color: ${COLORS.green};
  }
`

export default Link
