import React from 'react'
import HeroHeadline from '../../Components/HeroHeadline'
import { Box } from '@mui/material'
import BlogSlider from './BlogSlider'
import BlogSection from '../Dashboard/BlogSection'
import Breadcrumb from './Breadcrumb'

const Blog:React.FC = () => {
  return (
    <Box>
        {/* <HeroHeadline>
            <span data-outline>Learn. Grow. Succeed </span>{" "}
            <span data-outline>Our blog brings you </span>{" "}
            <span data-highlight> real stories,expert advice, and timeless strategies</span>{" "}
           <span data-outline> to navigate the property world.</span>{" "}
          </HeroHeadline> */}
          <Breadcrumb/>
          {/* <BlogSlider/> */}
          <BlogSection/>
      
    </Box>
  )
}

export default Blog
