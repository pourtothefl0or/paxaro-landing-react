import React from 'react'
import styled from 'styled-components'

const Container = ({className, children}) => {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 var(--container-indent);
  max-width: calc(1240px + (var(--container-indent) * 2));
`

export default Container
