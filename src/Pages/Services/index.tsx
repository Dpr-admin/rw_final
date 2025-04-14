import React from 'react'
import HeroHeadline from '../../Components/HeroHeadline'
import { Box } from '@mui/material'
import Testimonial from '../Dashboard/Testimonial'
import AllServices from './AllServices'
import WorkingProcess from './WorkingProcess'
import ClientsLogo from '../Dashboard/ClientsLogo'


const Services:React.FC = () => {
  return (
    <Box>
         <HeroHeadline>
            <span data-outline>Lorem ipsum dolor</span>{" "}
            <span data-highlight>sit amet, consectetur</span>{" "}
           <span data-outline>adipiscing </span>{" "}
      
            <span data-highlight>Sed euismod </span>
          </HeroHeadline>
          <AllServices/>
          <Testimonial/>
          <WorkingProcess/>
          <ClientsLogo/>
      
    </Box>
  )
}

export default Services
