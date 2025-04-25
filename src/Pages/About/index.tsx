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
import Breadcrumb from './Breadcrumb'

const About:React.FC = () => {
  return (
    <Box>
       {/* <HeroHeadline>
            <span data-outline >The</span>{" "}
            <span data-highlight>Ultimate Luxury Sales Mentoring </span>{" "}
           <span data-outline>To </span>{" "}
            <span data-highlight>Sell High Ticket Properties  </span>
           <span data-outline>Faster Than Ever           </span>{" "}


      
          </HeroHeadline> */}
          <Breadcrumb/>
          <AboutVideo/>
          {/* <AboutDetails/> */}
          <SuccessMarquee/>
          {/* <Counter/> */}
          <Experience/>
          <Awards/>
          <Testimonial/>
          {/* <ClientsLogo/> */}
       
    </Box>
  )
}

export default About
