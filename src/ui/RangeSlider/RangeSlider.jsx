import React from 'react'
import styled from 'styled-components'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './rangeSlider.css'
import { COLORS, TYPOGRAPHY } from '../../constants'

const RangeSlider = () => {
  const rangeValues = {
    min: 2,
    max: 5,
    defaultValue: 3,
    step: 1
  }

  return (
    <StyledSlider>
      <SliderPoint>{rangeValues.min}</SliderPoint>
      <Slider
        min={rangeValues.min}
        max={rangeValues.max}
        defaultValue={rangeValues.defaultValue}
        step={rangeValues.step}
      />
      <SliderPoint>{rangeValues.max}</SliderPoint>
    </StyledSlider>
  )
}

const StyledSlider = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  min-height: 30px;
`

const SliderPoint = styled.p`
  margin: 0;
  ${TYPOGRAPHY.caption1Semibold18}
  color: ${COLORS.white};
`

export default RangeSlider
