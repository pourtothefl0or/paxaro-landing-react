import React from 'react'
import styled from 'styled-components'
import { PRIMARY } from '../../constants'
import appStore from '../../assets/images/Icons/app-store.svg'
import googlePlay from '../../assets/images/Icons/google-play.svg'

const Apps = ({className}) => {
  const appsList = [
    { id: 1, image: appStore, alt: 'App Store' },
    { id: 2, image: googlePlay, alt: 'Google Play' },
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

  &:focus,
  &:hover {
    transform: translateY(-5px);
  }
`

export default Apps
