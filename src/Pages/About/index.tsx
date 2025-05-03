import React from 'react'
import AboutVideo from './AboutVideo'
import { Box } from '@mui/material'
import HeroHeadline from '../../Components/HeroHeadline'
import AboutDetails from '../Dashboard/AboutDetails'
import AboutSection from '../Dashboard/AboutSection'
import SuccessMarquee from './SuccessMarquee'
import Experience from './Experience'
import Awards from './Awards'
import Testimonial from '../Dashboard/Testimonial'
import Breadcrumb from './Breadcrumb'

const About:React.FC = () => {
  return (
    <Box>

          <Breadcrumb/>
          <AboutSection/>
          {/* <AboutVideo/> */}
          <AboutDetails/>
          <SuccessMarquee/>
          <Testimonial/>
       
    </Box>
  )
}

export default About
