import React, { useState } from 'react';
import Imagery from '../assets/personservice.jpg';
import Clientel from '../components/Essentials/Clientel';

const Track = () => {
  const [trackerId, setTrackerId] = useState('');
  const [selectedCode, setSelectedCode] = useState(null);

  const handleTrack = () => {
    if (trackerId.trim()) {
      setSelectedCode(trackerId);
    }
  };

  return selectedCode ? (
    // Show only Clientel component when a tracking ID is entered
    <Clientel selectedCode={selectedCode} />
  ) : (
    // Ensure background covers the whole page
    <div className="bg-gray-100 min-h-screen">
      <div className="per-service py-4 px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-[6rem] md:pt-[8rem] lg:py-[10rem]">
          {/* Left Section: Tracker Input & Write-up */}
          <div className="section-left flex-1">
            <div className="section-title mb-12">
              <h3 className="text-[#091242] text-lg uppercase tracking-wide font-bold mb-2">
                Track Your Package
              </h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#091242] leading-tight">
                Enter Your <span className="text-orange-500">Tracking ID</span>
              </h2>
              <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mt-4">
                Enter your unique Tracking ID below to get real-time updates on your shipment.
              </p>
            </div>
  
            <div className="tracker-input flex items-center space-x-4 mt-6">
              <input
                type="text"
                placeholder="Enter Tracking ID"
                className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={trackerId}
                onChange={(e) => setTrackerId(e.target.value)}
              />
              <button
                onClick={handleTrack}
                className="px-6 py-3 bg-[#091242] text-white text-lg font-semibold rounded-lg shadow hover:bg-indigo-900 transition"
              >
                Track
              </button>
            </div>
          </div>
  
          {/* Right Section: Image Display */}
          <div className="section-right flex-1 flex justify-center items-center">
            <img
              src={Imagery}
              alt="Imagery Tracking"
              className="w-full h-60 sm:h-60 sm:w-[22rem] md:h-[24rem] md:w-[38rem] lg:h-[34rem]  lg:max-w-full object-cover rounded-sm shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Track;
