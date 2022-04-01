import React from 'react'
import styled from 'styled-components'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './range.css'
import { COLORS, TYPOGRAPHY } from '../../constants'

const Range = ({min, max, defaultValue, step, childValue}) => {
  return (
    <StyledSlider>
      <SliderPoint>{min}</SliderPoint>
      <Slider
        min={min}
        max={max}
        defaultValue={defaultValue}
        step={step}
        onChange={(value) => childValue(value)}
      />
      <SliderPoint>{max}</SliderPoint>
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

export default Range
