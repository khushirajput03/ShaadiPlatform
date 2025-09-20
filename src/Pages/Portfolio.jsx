import React from 'react'
import { PortfolioPart1 } from '../components/PortfolioPart1'
import PortfolioCarousel from '../components/PortfolioCarousel'
import PortfolioCarousel2 from '../components/PortfolioCarousel2'
import PortfolioCarousel3 from '../components/PortfolioCarousel3'
import PortfolioDecor from '../components/PortfolioDecor'
import PortfolioDecor2 from '../components/PortfolioDecor2'
import PortfolioDecor3 from '../components/PortfolioDecor3'

export const Portfolio = () => {
  return (
    <div>
      <PortfolioPart1 />
      <PortfolioCarousel/>
      <PortfolioCarousel2/>
      <PortfolioCarousel3/>
       <PortfolioDecor/>
     <PortfolioDecor2/>
      <PortfolioDecor3/>
    </div>
  )
}
