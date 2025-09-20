import React from 'react'
import {ServicePart1} from '../components/ServicePart1.jsx'
import ServiceCardSection from '../components/ServiceCardSection.jsx'
import ServiceFAQSection from '../components/ServiceFAQSection.jsx'

export const Service = () => {
  return (
    <div>
      <ServicePart1/>
      <ServiceCardSection/>
      <ServiceFAQSection/>
    </div>
  )
}
