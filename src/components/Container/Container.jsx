import React from 'react'
import styled from 'styled-components'
import { PRIMARY } from '../../constants'

const Container = ({className, children}) => {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${PRIMARY.primaryHorizontalIndent};
  max-width: calc(${PRIMARY.primaryWidth} + (${PRIMARY.primaryHorizontalIndent} * 2));
`

export default Container
