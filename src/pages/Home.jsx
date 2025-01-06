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
  const [imageCount, setImageCount] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    const allImages = Array.from(document.images); // Get all images in the DOM.
    const totalImages = allImages.length;

    if (totalImages === 0) {
      // If there are no images, stop the loader immediately with delay.
      setTimeout(() => setIsLoading(false), 1500); // 1.5 seconds delay
      return;
    }

    setImageCount(totalImages);

    const handleImageLoad = () => {
      setImagesLoaded((prev) => prev + 1);
    };

    // Attach load/error listeners to each image.
    allImages.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
        img.addEventListener('error', handleImageLoad);
      }
    });

    // Cleanup event listeners
    return () => {
      allImages.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, []);

  useEffect(() => {
    // When all images are loaded, add the extra 1.5-second delay before stopping the loader.
    if (imagesLoaded === imageCount) {
      setTimeout(() => setIsLoading(false), 3000); // 3 seconds delay
    }
  }, [imagesLoaded, imageCount]);

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
