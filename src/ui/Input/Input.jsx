import React from 'react'
import styled from 'styled-components'

// --- constants ---
import { COLORS, TYPOGRAPHY } from '../../constants'

const Input = ({...props}) => {
  return (
    <InputLabel>
      <InputPlaceholder>{props.placeholder}</InputPlaceholder>
      <StyledInput type={props.type} />
    </InputLabel>
  )
}

const InputLabel = styled.label`
  position: relative;
  display: inline-block;

  &.is-focus {
    p {
      color: ${COLORS.green};
      ${TYPOGRAPHY.caption2Semibold14}
      transform: translateY(-150%);
    }
  }

  &.is-error {
    p {
      color: ${COLORS.error};
    }

    input {
      border-color: ${COLORS.error};
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
  transition: all var(--primary-animation);
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
  transform: all var(--primary-animation);
  transition-property: border-color;
`

export default Input