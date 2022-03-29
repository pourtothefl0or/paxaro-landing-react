import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'

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
      label: 'Indonesia',
    },
  ]

  return (
    <CustomSelect options={languageList} />
  )
}

const CustomSelect = styled(Select)`
  z-index: 100;
`

export default Language
