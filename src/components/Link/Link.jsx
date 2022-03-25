import React from 'react'
import styled from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY } from '../../constants'

const Link = ({className, children}) => {
  return (
    <StyledLink className={className} href="#">{children}</StyledLink>
  )
}

const StyledLink = styled.a`
  ${TYPOGRAPHY.caption2Semibold14}
  color: ${COLORS.white};
  transition: all ${PRIMARY.primaryAnimation};
  transition-property: color;

  &:hover {
    color: ${COLORS.green};
  }
`

export default Link
