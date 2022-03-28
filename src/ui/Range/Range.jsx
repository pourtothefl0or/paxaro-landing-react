import React, { setState } from 'react'
import { Range } from 'react-range'
import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';

const CustomRange = () => {
  const state = { values: [3] };

  return (
    <Range
      step={1} min={2} max={5}
      values={state.values}
      onChange={(values) => this.setState({ values })}
      renderTrack={({props, children}) => (<RangeTrack {...props}>{children}</RangeTrack>)}
      renderThumb={({props}) => (<RangeThumb {...props} />)}
    />
  )
}

const RangeTrack = styled.div`
  border-radius: 4px;
  width: 100%;
  height: 4px;
  background-color: #999;
`

const RangeThumb = styled.div`
  border: 3px solid ${COLORS.dark};
  border-radius: 100%;
  width: 24px;
  height: 24px;
  background-color: ${COLORS.green};
  box-shadow: ${PRIMARY.primaryShadow};
`

export default CustomRange
