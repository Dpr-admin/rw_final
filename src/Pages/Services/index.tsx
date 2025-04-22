import React from 'react'
import HeroHeadline from '../../Components/HeroHeadline'
import { Box } from '@mui/material'
import Testimonial from '../Dashboard/Testimonial'
import AllServices from './AllServices'
import WorkingProcess from './WorkingProcess'
import ClientsLogo from '../Dashboard/ClientsLogo'
import Mentoring from './ServicesDetails/MentoringService/MentoringTabs'


const Services:React.FC = () => {
  return (
    <Box>
         <HeroHeadline>
            <span data-highlight>Sales mentoring </span>{" "}
           <span data-outline>with a strong focus on</span>{" "}
      
            <span data-highlight>Branding</span>
          </HeroHeadline>
          <AllServices/>
          <Testimonial/>
          <WorkingProcess/>
          <ClientsLogo/>
      
    </Box>
  )
}

export default Services
