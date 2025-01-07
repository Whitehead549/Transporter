import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-[30rem] bg-white flex items-center justify-center">
      {/* Content Wrapper */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight max-w-3xl tracking-wide">
          We Are Global Logistic Providers
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mb-10 px-4 sm:px-8 leading-relaxed">
          Specializing in fast, reliable, and global logistics services, we ensure your goods are delivered safely and on time with a network that spans the globe.
        </p>

        {/* Button Container */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 justify-center gap-4">
          {/* Track Item Button */}
          <a
            href="https://freightswiftlogistics.com/tracking/"
            className="bg-transparent border-2 border-gray-800 text-gray-800 py-3 px-8 sm:px-10 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Track Item
          </a>

          {/* About Us Button */}
          <a
            href="https://freightswiftlogistics.com/about/"
            className="bg-transparent border-2 border-gray-800 text-gray-800 py-3 px-8 sm:px-10 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
