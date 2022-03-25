import React from 'react'
import styled from 'styled-components'
import { COLORS, TYPOGRAPHY } from '../../constants'

const Title = ({subtitle, title}) => {
  return (
    <StyledTitleInner>
      <StyledSubTitle>{subtitle}</StyledSubTitle>
      <StyledTitle>{title}</StyledTitle>
    </StyledTitleInner>
  )
}

const StyledTitleInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const StyledSubTitle = styled.p`
  display: block;
  margin: 0 0 12px;
  padding: 3px 13px;
  ${TYPOGRAPHY.caption1Semibold18}
  color: ${COLORS.black};
  background-color: #f4f4f4;

  @media (max-width: 1023px) {
    ${TYPOGRAPHY.caption3Semibold12}
  }
`

const StyledTitle = styled.h2`
  display: block;
  margin: 0 0 20px;
  ${TYPOGRAPHY.title2Bold40}
  color: ${COLORS.black};

  @media (max-width: 1023px) {
    ${TYPOGRAPHY.subtitle1Bold24}
  }
`

export default Title
