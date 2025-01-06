import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-bl from-custom_blue via-custom_gold to-white flex items-center justify-center">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-custom_blue opacity-30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-custom_gold opacity-40 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" />

      {/* Content Wrapper */}
      <div className="text-center px-8 max-w-6xl z-20">
        {/* Animated Heading */}
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-custom_blue mb-8 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Transforming Logistics Worldwide
        </motion.h1>

        {/* Animated Subtext */}
        <motion.p
          className="text-lg md:text-2xl text-gray-800 mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Delivering innovative and reliable solutions, we empower your global logistics journey with unmatched precision and care.
        </motion.p>

        {/* Button Container */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Primary Action Button */}
          <motion.a
            href="#services"
            className="py-4 px-10 rounded-full text-lg font-medium text-white bg-custom_blue hover:bg-custom_gold hover:text-custom_blue transition-transform transform hover:scale-105 shadow-xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            Explore Services
          </motion.a>

          {/* Secondary Action Button */}
          <motion.a
            href="#contact"
            className="py-4 px-10 rounded-full text-lg font-medium text-custom_blue bg-white border-2 border-custom_blue hover:bg-custom_gold hover:text-white transition-transform transform hover:scale-105 shadow-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          >
            Contact Us
          </motion.a>
        </div>
      </div>

      {/* Overlay for Depth Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;
