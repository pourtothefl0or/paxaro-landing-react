import React from 'react'
import styled from 'styled-components'
import { TYPOGRAPHY, COLORS, PRIMARY } from '../../constants'

const Radio = ({...props}) => {
  return (
    <StyledRadio>
      <InputRadio type="radio" name={props.name} {...props}/>
      <CustomRadio></CustomRadio>
      <InputText>{props.text}</InputText>
    </StyledRadio>
  )
}

const StyledRadio = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  column-gap: 14px;
  cursor: pointer;
`

const InputRadio = styled.input`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  border: 0 !important;
  padding: 0 !important;
  clip: rect(0 0 0 0) !important;
  overflow: hidden !important;

  &:checked ~ span:nth-of-type(1) {
    &:after {
      background-color: ${COLORS.green};
    }
  }
`

const CustomRadio = styled.span`
  position: relative;
  display: inline-block;
  border: 1px solid ${COLORS.green};
  border-radius: 100%;
  width: 30px;
  height: 30px;
  background-color: transparent;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    width: 24px;
    height: 24px;
    background-color: #4a4b4b;
    transform: translate(-50%, -50%);
    transition: all ${PRIMARY.primaryAnimation};
    transition-property: background-color;
  }
`

const InputText = styled.span`
  ${TYPOGRAPHY.caption1Semibold18}
  color: ${COLORS.white};
`

export default Radio
