import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[40vh] lg:h-[74vh] overflow-hidden bg-custom_blue my-6">
      {/* Content Wrapper */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-16 sm:pt-8 md:pt-12 lg:pt-16 px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <h1 className="text-2xl sm:text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-2 md:mb-4 leading-snug sm:leading-tight md:leading-normal max-w-3xl tracking-wide">
          We Are Global <br/>Logistic Providers
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-xs md:text-xl lg:text-lg text-white max-w-xs sm:max-w-xl md:max-w-2xl mb-4 sm:mb-3 md:mb-6 px-2 sm:px-6 leading-relaxed">
          Specializing in fast and reliable logistics services, 
          with a network that spans the globe.
        </p>

        {/* Button Container */}
        <div className="flex flex-wrap space-x-0 sm:space-x-4 justify-center gap-2 sm:gap-0 pb-4">
          {/* Get Quote Button */}
          <a
            href="https://freightswiftlogistics.com/about/"
            className="bg-white border-2 border-white text-custom_blue py-1 px-4 sm:px-6 md:px-10 lg:px-12 lg:py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Get Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
