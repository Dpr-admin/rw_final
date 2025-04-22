import React from 'react'
import Banner from './ProjectSlider'
import Overview from './Overview'
import ProjectData from './ProjectData'
import Choose from './Choose'
import PropertyDescription from './PropertyDescription'
import Amenities from './Amenities'
import FloorPlans from './FloorPlans'

const index = () => {
  return (
    <div>
        <Banner/>
        <Overview/>
        <PropertyDescription/>
        <Amenities/>
        <FloorPlans/>
        {/* <ProjectData/> */}
        {/* <Choose/> */}
      
    </div>
  )
}

export default index
