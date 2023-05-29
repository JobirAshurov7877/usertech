import React from 'react'
import { OurAgency, StudioContact, StudioOurPartners, StudioServices } from '../../components'

const Studio = () => {
  return (
    <div className='Studio'>
        <OurAgency />
        <StudioServices />
        <StudioOurPartners />
        <StudioContact />
    </div>
  )
}

export default Studio