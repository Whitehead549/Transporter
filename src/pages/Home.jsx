import React from 'react';
import heroBanner from "../assets/ship.jpg"; // Single image
import Logistics from '../components/Logistics';
import Support from '../components/Support';
import Steps from '../components/Steps';
import Testimonial from '../components/Essentials/Testimonial';
import DailyStats from '../components/Essentials/DailyStats';
import PerService from '../components/Essentials/PerService';
import Partners from '../components/Partners';

const Home = () => {
  return (
    <div className="bg-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          {/* Overlay with dark transparent color */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>

          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBanner})` }}
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
            Specializing in fast, reliable, and global logistics services, we ensure your goods are delivered safely and on time with a network that spans the globe.
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
      <Logistics />
      <Support />
      <Steps />
      <Testimonial />
      <DailyStats />
      <PerService />
      <Partners />
    </div>
  );
};

export default Home;
