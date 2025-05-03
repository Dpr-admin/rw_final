import React from 'react'
import HeroHeadline from '../../Components/HeroHeadline'
import { Box } from '@mui/material'
import Breadcrumb from './Breadcrumb'
import LinkedinBlogs from './BlogDetails/LinkedinBlogs'
import BlogSection from './BlogSection'

const Blog:React.FC = () => {
  return (
    <Box>
          <Breadcrumb/>
          {/* <BlogSlider/> */}
          <BlogSection/>
          {/* <LinkedinBlogs/> */}
      
    </Box>
  )
}

export default Blog
