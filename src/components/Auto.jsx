import React from "react";
import videoBackground from "../video/background.mp4"; // Update with your video file path

const Auto = () => {
  return (
    <div className="relative w-full h-[400px]"> {/* Adjusted height */}
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoBackground}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-start h-full bg-black bg-opacity-50 px-6">
        <div className="text-left text-white max-w-lg">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
            We Provide <br /> Safe & Secure Delivery Procedures
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-80">
            Trust us with your delivery needs, ensuring safe and reliable services every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auto;
