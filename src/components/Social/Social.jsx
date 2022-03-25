import React from 'react'
import styled from 'styled-components'

// --- components ---
import { Link } from '../'

const Social = ({className}) => {
  let socialList = [
    { id: 1, label: 'Instagram' },
    { id: 2, label: 'VC' },
    { id: 3, label: 'Twitter' },
    { id: 4, label: 'YouTube' },
    { id: 5, label: 'Telegram' }
  ]

  return (
    <StyledSocial className={className}>
      {
        socialList.map(item =>
          <li key={item.id}>
            <Link>{item.label}</Link>
          </li>
        )
      }

    </StyledSocial>
  )
}

const StyledSocial = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 5px;

  li:not(:last-child) {
    margin-right: 20px;
  }
`

export default Social
