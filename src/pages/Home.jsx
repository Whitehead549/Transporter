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
    const images = document.querySelectorAll('img');
    const totalImages = images.length;
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages += 1;
      if (loadedImages === totalImages) {
        setIsLoading(false);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
        img.addEventListener('error', handleImageLoad);
      }
    });

    // Cleanup event listeners
    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
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
