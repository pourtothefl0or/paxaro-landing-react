import React, { useState } from 'react'
import { Range } from 'react-range'
import styled from 'styled-components';
import { COLORS, PRIMARY, TYPOGRAPHY } from '../../constants';

const RangeSlider = () => {
  const rangeValues = {
    step: 1,
    min: 2,
    max: 5,
    defaultValue: [3]
  }

  const [values, setValues] = useState(rangeValues.defaultValue)

  return (
    <CustomRange
      step={rangeValues.step} min={rangeValues.min} max={rangeValues.max}
      values={values}
      onChange={(values) => setValues(values)}
      renderTrack={({props, children}) =>
        (<RangeTrack
          aria-valuemin={rangeValues.min}
          aria-valuemax={rangeValues.max}
          {...props}
          >
            {children}
        </RangeTrack>
        )}
      renderThumb={({props}) => (
        <RangeThumb {...props} />
      )}
    />
  )
}

const CustomRange = styled(Range)``

const RangeTrack = styled.div`
  position: relative;
  border-radius: 4px;
  width: 100%;
  height: 4px;
  background-color: #999;

  &::before {
    content: attr(aria-valuemin);
    position: absolute;
    top: 50%;
    left: -30px;
    ${TYPOGRAPHY.caption1Semibold18}
    color: ${COLORS.white};
    transform: translateY(-50%);
  }

  &::after {
    content: attr(aria-valuemax);
    position: absolute;
    top: 50%;
    right: -30px;
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
    content: attr(aria-valuenow);
    position: absolute;
    top: calc(-100% - 10px);
    left: 50%;
    ${TYPOGRAPHY.caption1Semibold18}
    color: ${COLORS.green};
    transform: translateX(-50%);
  }
`

export default RangeSlider
