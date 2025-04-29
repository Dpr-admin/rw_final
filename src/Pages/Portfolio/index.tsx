import { Box } from '@mui/material'
import React from 'react'
import HeroHeadline from '../../Components/HeroHeadline'
import PortfolioSlider from './PortfolioSlider'
import WorkingProcess from './WorkingProcess'
import PortfolioSection from './PortfolioSection'


const Portfolio: React.FC = () => {
  return (
    <Box>
      <HeroHeadline>
        <span data-outline>Trusted by industry leaders,</span>{" "}
        <span data-highlight> Backed by Reputation.</span>{" "}
        <span data-outline>Browse my</span>{" "}

        <span data-highlight>Portfolio </span>
        <span data-outline>of premium clients, </span>{" "}
        <span data-highlight> Milestones & Media Features. </span>


      </HeroHeadline>
      {/* <PortfolioSlider /> */}
      <PortfolioSection />
      {/* <WorkingProcess /> */}


    </Box>
  )
}

export default Portfolio
