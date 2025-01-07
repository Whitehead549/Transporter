import React, { useEffect, useState } from 'react';
import heroBanner from "../assets/ship.jpg"; // Single image
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
    // Scroll to Hero section after the page has fully rendered
    if (pageLoaded) {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [pageLoaded]);

  useEffect(() => {
    // Scroll to "Other Sections" on page load
    const otherSections = document.getElementById('other-sections');
    if (otherSections) {
      otherSections.scrollIntoView();
    }

    // Simulate page fully rendered state
    const timeout = setTimeout(() => {
      setPageLoaded(true);
    }, 10); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <div
        id="hero-section"
        className="relative w-full h-screen overflow-hidden"
      >
        <div className="absolute inset-0">
          {/* Overlay with dark transparent color */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>

          {/* Image is loaded and displayed */}
          <img
            src={heroBanner}
            alt="Hero Banner"
            className={`w-full h-full object-cover ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            style={{ transition: 'opacity 0.1s ease' }} // Smooth fade-in effect
          />
        </div>

        {/* Content Wrapper */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl tracking-wide">
            We Are Global Logistic Providers
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white max-w-2xl mb-10 px-6 leading-relaxed">
            Specializing in fast, reliable, and global logistics services, we
            ensure your goods are delivered safely and on time with a network
            that spans the globe.
          </p>

          {/* Button Container */}
          <div className="flex space-x-6 justify-center">
            {/* Track Item Button */}
            <a
              href="https://freightswiftlogistics.com/tracking/"
              className="bg-transparent border-2 border-white text-white py-3 px-10 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Track Item
            </a>

            {/* About Us Button */}
            <a
              href="https://freightswiftlogistics.com/about/"
              className="bg-transparent border-2 border-white text-white py-3 px-10 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              About Us
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
