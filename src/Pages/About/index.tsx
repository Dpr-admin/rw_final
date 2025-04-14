import React from 'react'
import AboutVideo from './AboutVideo'
import { Box } from '@mui/material'
import HeroHeadline from '../../Components/HeroHeadline'
import AboutDetails from '../Dashboard/AboutDetails'
import SuccessMarquee from './SuccessMarquee'
import Counter from './Counter'
import Experience from './Experience'
import Awards from './Awards'
import Testimonial from '../Dashboard/Testimonial'
import ClientsLogo from '../Dashboard/ClientsLogo'

const About:React.FC = () => {
  return (
    <Box>
       <HeroHeadline>
            <span data-outline>Lorem ipsum dolor</span>{" "}
            <span data-highlight>sit amet, consectetur</span>{" "}
           <span data-outline>adipiscing </span>{" "}
      
            <span data-highlight>Sed euismod </span>
          </HeroHeadline>
          <AboutVideo/>
          <AboutDetails/>
          <SuccessMarquee/>
          {/* <Counter/> */}
          <Experience/>
          <Awards/>
          <Testimonial/>
          <ClientsLogo/>
       
    </Box>
  )
}

export default About
