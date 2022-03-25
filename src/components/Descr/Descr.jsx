import React from 'react'
import styled from 'styled-components'
import { TYPOGRAPHY } from '../../constants'

const Descr = ({children}) => {
  return (
    <StyledDescr>{children}</StyledDescr>
  )
}

const StyledDescr = styled.p`
  margin: 0 auto 55px;
  max-width: 890px;
  ${TYPOGRAPHY.body1Regular18}
  text-align: center;

  @media (max-width: 1023px) {
    margin-bottom: 40px;
    ${TYPOGRAPHY.body2Regular14}
  }
`

export default Descr
