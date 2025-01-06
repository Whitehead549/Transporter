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
  const [showDarkScreen, setShowDarkScreen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
      setShowDarkScreen(true);
    }, 2000); // 2 seconds delay for the loader

    // Show dark background for 1 second after loading
    const darkScreenTimer = setTimeout(() => {
      setShowDarkScreen(false);
    }, 5000); // 3 seconds total (2 seconds loader + 1 second dark background)

    // Cleanup timers on unmount
    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(darkScreenTimer);
    };
  }, []);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  if (showDarkScreen) {
    return <div className="w-full h-screen bg-black"></div>;
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
