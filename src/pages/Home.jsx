import React, { useEffect, useState } from 'react';
import heroBanner from "../assets/ship.jpg";
import Logistics from '../components/Logistics';
import Support from '../components/Support';
import Steps from '../components/Steps';
import Testimonial from '../components/Essentials/Testimonial';
import DailyStats from '../components/Essentials/DailyStats';
import PerService from '../components/Essentials/PerService';
import Partners from '../components/Partners';

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    if (pageLoaded) {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [pageLoaded]);

  useEffect(() => {
    const otherSections = document.getElementById('other-sections');
    if (otherSections) {
      otherSections.scrollIntoView();
    }

    const timeout = setTimeout(() => {
      setPageLoaded(true);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <div id="hero-section" className="relative w-full h-[80vh] sm:h-[80vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <img
            src={heroBanner}
            alt="Hero Banner"
            className={`w-full h-full object-cover ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            } object-contain sm:object-cover`}
            onLoad={handleImageLoad}
            style={{ transition: 'opacity 0.1s ease' }}
          />
        </div>

        {/* Content Wrapper */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl tracking-wide">
            <span className='text-custom_gold'>We Are </span>Global Logistic Providers
          </h1>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center pt-6">
           
            <a
              href="https://freightswiftlogistics.com/about/"
              className="bg-custom_gold border-2 border-custom_gold rounded-md text-[#000000] py-3 px-2 sm:px-5 lg:px-3 md:px-2 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-2xl text-sm sm:text-base"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div id="other-sections">
        <Logistics />
        <Support />
        <Steps />
        <Testimonial />
        <DailyStats />
        <PerService />
        <Partners />
      </div>
    </div>
  );
};

export default Home;
