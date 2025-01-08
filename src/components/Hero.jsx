import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[40vh] lg:h-[68vh] overflow-hidden bg-custom_blue">
      {/* Content Wrapper */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-12 sm:pt-8 md:pt-12 lg:pt-16 px-4 sm:px-6 md:px-8">
  {/* Heading */}
  <h1 className="text-2xl sm:text-lg md:text-5xl lg:text-6xl font-bold text-custom_gold mb-3 sm:mb-2 md:mb-4 leading-snug sm:leading-tight md:leading-normal max-w-3xl tracking-wide">
    We Are Global <span className="text-white">Logistic Providers</span>
  </h1>
  
  {/* Description */}
  <p className="text-base sm:text-sm md:text-xl lg:text-lg text-white max-w-xl md:max-w-2xl mb-4 sm:mb-3 md:mb-6 px-4 sm:px-6 leading-relaxed">
    Specializing in fast and reliable logistics services, 
    with a network that spans the globe.
  </p>

  {/* Button Container */}
  <div className="flex flex-wrap space-x-0 sm:space-x-4 justify-center gap-2 sm:gap-0 pt-0">
    {/* Get Quote Button */}
    <a
      href="https://freightswiftlogistics.com/about/"
      className="bg-custom_gold border-2 border-custom_gold text-white py-2 px-5 sm:px-6 md:px-10 lg:px-12 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-xl"
    >
      Get Quote
    </a>
  </div>
</div>

    </div>
  );
};

export default Hero;
