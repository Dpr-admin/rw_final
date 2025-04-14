import React from 'react'
import HeroHeadline from '../../Components/HeroHeadline'
import { Box } from '@mui/material'
import BlogSlider from './BlogSlider'
import BlogSection from '../Dashboard/BlogSection'

const Blog:React.FC = () => {
  return (
    <Box>
        <HeroHeadline>
            <span data-outline>Lorem ipsum dolor</span>{" "}
            <span data-highlight>sit amet, consectetur</span>{" "}
           <span data-outline>adipiscing </span>{" "}
      
            <span data-highlight>Sed euismod </span>
          </HeroHeadline>
          <BlogSlider/>
          <BlogSection/>
      
    </Box>
  )
}

export default Blog
