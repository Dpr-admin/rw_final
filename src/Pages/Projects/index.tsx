import React, { useState } from 'react';
import HeroSection from './HeroSection';
import CounterSection from './CounterSection ';
import { Services } from '../../assets';
import AllProjects from './AllProjects';
import Allprojects2 from './Allprojects2';
import AllProjectsFindAll from './AllProjectsFindAll';





const Index: React.FC = () => {
  const [counterTrigger, setCounterTrigger] = useState(false);
  const [scrollPassed, setScrollPassed] = useState(false);

  return (
    <>
      <HeroSection
        Services={{
          bgimgone: Services.bgimgone,
          bgimgtwo: Services.bgimgtwo,
        }}
        onScrollEnd={() => setScrollPassed(true)}
      />

      {scrollPassed && <AllProjectsFindAll />}
      {/* <Banner/> */}

      {/* <AllProjects /> */}
      {/* <Allprojects2/> */}
      {/* <AllProjectsFindAll/> */}

    </>
  );
};

export default Index;


