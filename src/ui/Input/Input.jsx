import React, { forwardRef } from 'react'
import styled from 'styled-components'

// --- constants ---
import { COLORS, TYPOGRAPHY, PRIMARY } from '../../constants'

const Input = forwardRef(({placeholder, type, name, ...rest}, ref) => {
  return (
    <InputLabel>
      <InputPlaceholder>{placeholder}</InputPlaceholder>
      <StyledInput type={type} name={name} {...rest} ref={ref}/>
    </InputLabel>
  )
})

const InputLabel = styled.label`
  position: relative;
  display: inline-block;

  &:focus-within {
    p {
      color: ${COLORS.green};
      ${TYPOGRAPHY.caption2Semibold14}
      transform: translateY(-150%);
    }
  }

  &.is-error {
    p {
      color: ${COLORS.red};
    }

    input {
      border-color: ${COLORS.red};
    }
  }
`

const InputPlaceholder = styled.p`
  position: absolute;
  top: 50%;
  z-index: 5;
  left: 14px;
  margin: 0;
  color: ${COLORS.darkGray};
  ${TYPOGRAPHY.body1Regular18}
  transform: translateY(-50%);
  transition: all ${PRIMARY.primaryAnimation};
  transition-property: font-size, color, transform;
`

const StyledInput = styled.input`
  border: 0;
  border-bottom: 2px solid ${COLORS.green};
  padding: 8px 14px;
  width: 100%;
  min-height: 41px;
  color: ${COLORS.black};
  ${TYPOGRAPHY.caption1Semibold18}
  caret-color: ${COLORS.black};
  transform: all ${PRIMARY.primaryAnimation};
  transition-property: border-color;
`

export default Input
