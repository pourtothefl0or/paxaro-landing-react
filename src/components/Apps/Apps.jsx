import React from 'react'
import styled from 'styled-components'

// --- images ---
import appStore from '../../images/icons/app-store.svg'
import googlePlay from '../../images/icons/google-play.svg'

const Apps = ({className}) => {
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
  transition: all var(--primary-animation);
  transition-property: transform;

  &:hover {
    transform: translateY(-5px);
  }
`

export default Apps