import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logistics from "../components/Logistics";
import Support from "../components/Support";
import Steps from "../components/Steps";
import Testimonial from "../components/Essentials/Testimonial";
import DailyStats from "../components/Essentials/DailyStats";
import PerService from "../components/Essentials/PerService";
import Partners from "../components/Partners";
import Spinner from "../components/Spinner";
import heroImage from "../assets/ship.jpg";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imagesToLoad = [heroImage];

  useEffect(() => {
    // Preload all images
    const preloadImages = imagesToLoad.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(preloadImages)
      .then(() => {
        setIsLoaded(true); // All images are loaded
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        setIsLoaded(true); // Fallback: Consider loading complete even if some images fail
      });
  }, []);

  return (
    <div className="bg-gray-100 overflow-x-hidden">
      {!isLoaded && <Spinner />}
      {isLoaded && (
        <>
          {/* Hero Section */}
          <div 
            className="relative w-full h-[48vh] sm:h-[54vh] md:h-[44vh] lg:h-[74vh] overflow-hidden my-6"
            style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-16 sm:pt-8 md:pt-12 lg:pt-16 px-4 sm:px-6 md:px-8 bg-black bg-opacity-50">
              <h1 className="text-2xl sm:text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-2 md:mb-4 leading-snug sm:leading-tight md:leading-normal max-w-3xl tracking-wide">
                VELO <span>TRUST <br/>LOGISTICS</span>
              </h1>
              <p className="text-sm sm:text-xs md:text-xl lg:text-lg text-white max-w-xs sm:max-w-xl md:max-w-2xl mb-4 sm:mb-3 md:mb-6 px-2 sm:px-6 leading-relaxed">
                Your partner for efficient and reliable logistics solutions worldwide
              </p>
              <div className="flex flex-wrap space-x-0 sm:space-x-4 justify-center gap-2 sm:gap-0 pb-4">
                <Link
                  to="/quote"
                  className="bg-gray-50 border-2 border-gray-50 text-custom_blue py-1 px-4 sm:px-6 md:px-10 lg:px-12 lg:py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Get Quote
                </Link>
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
        </>
      )}
    </div>
  );
};

export default Home;
