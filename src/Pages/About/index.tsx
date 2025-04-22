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
            <span data-outline >Empowering excellence in</span>{" "}
            <span data-highlight>luxury </span>{" "}
           <span data-outline>real estate sales |  </span>{" "}
            <span data-highlight>RERA Registered  </span>
           <span data-outline>| Concierge to iconic realty brands | </span>{" "}
           <span data-highlight>Member – HRA & NAR India  </span>


      
          </HeroHeadline> */}
          <Breadcrumb/>
          <AboutVideo/>
          {/* <AboutDetails/> */}
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
