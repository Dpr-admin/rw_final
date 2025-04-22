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
        <span data-outline>Lorem ipsum dolor</span>{" "}
        <span data-highlight>sit amet, consectetur</span>{" "}
        <span data-outline>adipiscing </span>{" "}

        <span data-highlight>Sed euismod </span>
      </HeroHeadline>
      {/* <PortfolioSlider /> */}
      <PortfolioSection />
      <WorkingProcess />


    </Box>
  )
}

export default Portfolio
