import React from 'react'
import styled from 'styled-components'
import { COLORS, TYPOGRAPHY, PRIMARY } from '../../constants'

const Language = () => {
  const languageList = [
    {
      id: '1',
      value: 'russian',
      abbr: 'Ru',
      label: 'Россия',
    },
    {
      id: '2',
      value: 'english',
      abbr: 'En',
      label: 'English',
    },
    {
      id: '3',
      value: 'kazakh',
      abbr: 'Kz',
      label: 'Қазақстан',
    },
    {
      id: '4',
      value: 'turkish',
      abbr: 'Tr',
      label: 'Türkiye',
    },
    {
      id: '5',
      value: 'chinese',
      abbr: 'Zh',
      label: '中国',
    },
    {
      id: '6',
      value: 'indonesian',
      abbr: 'Id',
      label: 'Indonesia</span>',
    },
  ]

  return (
    <StyledLanguage>Ru</StyledLanguage>
  )
}

const StyledLanguage = styled.button`
  display: inline-block;
  border: 2px solid transparent;
  border-radius: ${PRIMARY.primaryRadius};
  padding: 9px;
  ${TYPOGRAPHY.caption2Semibold14}
  text-align: center;
  color: ${COLORS.black};
  background: ${COLORS.white};
  transition: all ${PRIMARY.primaryAnimation};
  transition-property: box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: ${PRIMARY.primaryShadow};
  }
`

export default Language
