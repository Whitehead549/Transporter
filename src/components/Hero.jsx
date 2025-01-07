import React, { useEffect } from 'react';
import heroBanner from "../assets/ship.jpg";

const Hero = () => {
  useEffect(() => {
    const img = new Image();
    img.src = heroBanner; // Preload the image
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div> 
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
      </div>
      {/* Remaining content */}
    </div>
  );
};

export default Hero;
