import React from 'react'
import Banner from './Banner'
import About from './About'
import Banner2 from './Banner2'
import AboutDetails from './AboutDetails'
import MarqueeScroll from './MarqueeScroll'
import ServicesSection from './ServicesSection'
import { Box } from '@mui/material'
import PortfolioSection from './PortfolioSection'
import Testimonial from './Testimonial'
import ClientsLogo from './ClientsLogo'
import BlogSection from './BlogSection'
import Banner3 from './Banner3'
import ImageRevealAnimation from './ImageRevealAnimation'


const Dashboard:React.FC = () => {
  return (
    <Box>
      {/* <Banner3/> */}
      <Banner2/>
      <About/>
      <AboutDetails/>
      <MarqueeScroll/>
      <ServicesSection/>
      {/* <ImageRevealAnimation/> */}
      <PortfolioSection/>
      <Testimonial/>
      <ClientsLogo/>
      <BlogSection/>
      
    </Box>
  )
}

export default Dashboard
