import React from 'react'
import styled, { css } from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY } from '../../constants'

const Link = ({className, href, children, ...props}) => {
  return (
    <StyledLink className={className} href={href} {...props}>
      {children}
    </StyledLink>
  )
}

const StyledLink = styled.a`
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

  // xxl
  ${props => props.xxl && css`
    @media (min-width: 1024px) {
      border-radius: 16px;
      padding: 25px 28px;
      ${TYPOGRAPHY.subtitle1Bold24}
    }

    @media (max-width: 1023px) {
      padding: 14px 28px;
    }
  `}

  // border
  ${props => props.border && css`
    --line: 2px;

    border: var(--line) solid transparent;
    border-color: ${COLORS.green};
    padding:
      calc(11px - var(--line))
      calc(18px - var(--line));
    color: ${COLORS.white};
    background: transparent;
  `}


  &:focus,
  &:hover {
    box-shadow: ${PRIMARY.primaryShadow};
  }
`

export default Link
