import React from 'react';
import { motion } from 'framer-motion';
import heroBanner from "../assets/ship.jpg"; // Single image

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        {/* Overlay with dark transparent color */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* This applies the dark overlay */}
        
        {/* Background Image */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
      </div>

      {/* Content Wrapper */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Heading with Framer Motion animation */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,  // Smooth fade-in duration
            ease: "easeOut",  // Custom easing for smoothness
            delay: 0.5,  // Slight delay before the animation starts
          }}
        >
          We Are Global Logistic Providers
        </motion.h1>

        {/* Description with Framer Motion animation */}
        <motion.p
          className="text-lg md:text-xl text-white max-w-2xl mb-10 px-6 leading-relaxed"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          Specializing in fast, reliable, and global logistics services, we ensure your goods are delivered safely and on time with a network that spans the globe.
        </motion.p>

        {/* Button Container */}
        <div className="flex space-x-6 justify-center">
          {/* Track Item Button with Framer Motion animation */}
          <motion.a
            href="https://freightswiftlogistics.com/tracking/"
            className="bg-transparent border-2 border-white text-white py-3 px-10 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-2xl"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            Track Item
          </motion.a>

          {/* About Us Button with Framer Motion animation */}
          <motion.a
            href="https://freightswiftlogistics.com/about/"
            className="bg-transparent border-2 border-white text-white py-3 px-10 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-2xl"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 100 }}
          >
            About Us
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
