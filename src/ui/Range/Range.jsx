import React, { useState } from 'react'
import { Range } from 'react-range'
import styled from 'styled-components';
import { COLORS, PRIMARY, TYPOGRAPHY } from '../../constants';

const CustomRange = () => {
  const rangeValues = {
    step: 1,
    min: 2,
    max: 5,
    defaultValue: [3]
  }

  const [values, setValues] = useState(rangeValues.defaultValue)

  return (
    <Range
      step={rangeValues.step} min={rangeValues.min} max={rangeValues.max}
      values={values}
      onChange={(values) => setValues(values)}
      renderTrack={({props, children}) => (<RangeTrack {...props}>{children}</RangeTrack>)}
      renderThumb={({props}) => (<RangeThumb {...props} />)}
    />
  )
}

const RangeTrack = styled.div`
  position: relative;
  border-radius: 4px;
  width: 100%;
  height: 4px;
  background-color: #999;

  &::before {
    content: '2';
    position: absolute;
    top: 50%;
    left: -25px;
    z-index: 5;
    ${TYPOGRAPHY.caption1Semibold18}
    color: ${COLORS.white};
    transform: translateY(-50%);
  }

  &::after {
    content: '5';
    position: absolute;
    top: 50%;
    right: -25px;
    z-index: 5;
    ${TYPOGRAPHY.caption1Semibold18}
    color: ${COLORS.white};
    transform: translateY(-50%);
  }
`

const RangeThumb = styled.div`
  position: relative;
  border: 3px solid ${COLORS.darkBlack};
  border-radius: 100%;
  width: 24px;
  height: 24px;
  background-color: ${COLORS.green};
  box-shadow: ${PRIMARY.primaryShadow};

  &::after {
    content: '3';
    position: absolute;
    top: calc(-100% - 10px);
    left: 50%;
    ${TYPOGRAPHY.caption1Semibold18}
    color: ${COLORS.green};
    transform: translateX(-50%);
  }
`

export default CustomRange
