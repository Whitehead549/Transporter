import React, { useState, useEffect } from 'react';
import DeliverIcon from '../components/Essentials/DeliverIcon';
import Hero from '../components/Hero';
import Logistics from '../components/Logistics';
import Support from '../components/Support';
import Steps from '../components/Steps';
import Testimonial from '../components/Essentials/Testimonial';
import DailyStats from '../components/Essentials/DailyStats';
import PerService from '../components/Essentials/PerService';
import Partners from '../components/Partners';

const Home = () => {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    // Set a timeout to display the Hero section after 0.5 seconds
    const timer = setTimeout(() => {
      setShowHero(true);
    }, 500);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-gray-100 overflow-x-hidden'>
      {showHero ? <Hero /> : null}
      <Logistics />
      <Support />
      <DeliverIcon />
      <Steps />
      <Testimonial />
      <DailyStats />
      <PerService />
      <Partners />
    </div>
  );
};

export default Home;
