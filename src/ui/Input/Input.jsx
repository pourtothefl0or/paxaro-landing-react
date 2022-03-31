import React, { useState, forwardRef } from 'react'
import styled from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY } from '../../constants'

const Input = forwardRef(({placeholder, type, name, labelClassName, className, ...rest}, ref) => {
  const [inputFill, setInputFill] = useState(true)
  const watchInputFill = el => setInputFill(el.length > 0 ? false : true)

  return (
    <InputLabel className={labelClassName}>
      <StyledInput
        type={type}
        name={name}
        {...rest}
        ref={ref}
        onChange={e => watchInputFill(e.target.value)}
        className={inputFill ? className : 'is-filled'}
      />
      <InputPlaceholder>{placeholder}</InputPlaceholder>
    </InputLabel>
  )
})

const InputLabel = styled.label`
  position: relative;
  display: inline-block;

  &.is-error {
    .form-field {
      &__input {
        border-color: ${COLORS.red};
      }

      &__placeholder {
        color: ${COLORS.red};
      }
    }
  }
`

const StyledInput = styled.input.attrs({
  className: 'form-field__input'
})`
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

  &:focus,
  &.is-filled {
    ~ p {
      color: ${COLORS.green};
      ${TYPOGRAPHY.caption2Semibold14}
      transform: translateY(-150%);
    }
  }
`

const InputPlaceholder = styled.p.attrs({
  className: 'form-field__placeholder'
})`
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

export default Input
