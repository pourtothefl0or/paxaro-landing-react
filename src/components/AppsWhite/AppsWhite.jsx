import React from 'react'
import styled from 'styled-components'
import { PRIMARY } from '../../constants'
import appStore from '../../assets/images/Icons/app-store-white.svg'
import googlePlay from '../../assets/images/Icons/google-play-white.svg'

const AppsWhite = ({className}) => {
  const appsList = [
    { id: 1, image: appStore, alt: "" },
    { id: 2, image: googlePlay, alt: "" },
  ]

  return (
    <StyledApps className={className}>
      {
        appsList.map((item) =>
        <AppsLink href="#" key={item.id}>
          <img src={item.image} alt={item.alt}/>
        </AppsLink>
        )
      }
    </StyledApps>
  )
}

const StyledApps = styled.div`
  display: flex;
  gap: 18px 15px;
`

const AppsLink = styled.a`
  transition: all ${PRIMARY.primaryAnimation};
  transition-property: transform;

  &:hover {
    transform: translateY(-5px);
  }
`

export default AppsWhite
