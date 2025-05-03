import React from 'react'
import Banner from './Banner'
import AboutSection from './AboutSection'
import Banner2 from './Banner2'
import AboutDetails from './AboutDetails'
import MarqueeScroll from './MarqueeScroll'
import ServicesSection from './ServicesSection'
import { Box } from '@mui/material'
import PortfolioSection from './PortfolioSection'
import Testimonial from './Testimonial'
import BlogSection from './BlogSection'
import About2 from './About2'


const Dashboard:React.FC = () => {
  return (
    <Box>
      <Banner2/>
      <AboutSection/>
      <AboutDetails/>
      <MarqueeScroll/>
      <ServicesSection/>
      <PortfolioSection/>
      <Testimonial/>
      <BlogSection/>
      
    </Box>
  )
}

export default Dashboard
