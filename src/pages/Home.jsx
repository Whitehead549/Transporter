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
import LoaderSpinner from '../components/Essentials/LoaderSpinner';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetch API data or prepare components)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay for the loader

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <LoaderSpinner />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 overflow-x-hidden">
      <Hero />
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
