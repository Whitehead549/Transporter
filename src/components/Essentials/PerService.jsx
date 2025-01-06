import React from "react";
import PersonalService from '../../assets/personservice.jpg';  // Import an image for the left side


const PerService = () => {
  const progressData = [
    { title: "Logistics & Transportation", percentage: 93 },
    { title: "Warehousing Packaging", percentage: 85 },
    { title: "Freight Management", percentage: 72 },
  ];

  return (
    <div className="per-service py-10 px-6 lg:px-20 bg-gray-100">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Section 1: Progress Bars */}
        <div className="section-left flex-1">
          <div className="section-title mb-16">
            <div className="title-header">
              <h3 className="text-indigo-500 text-lg uppercase tracking-wide font-bold mb-2">
                What makes us different?
              </h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Leading 3PL <br />
                with <span className="text-orange-500">Global Presence</span>.
              </h2>
            </div>
            <div className="title-desc mt-6">
              <p className="text-gray-600 text-lg lg:text-xl max-w-3xl">
                We are a global (3PL) freight forwarder focused on offering
                competitive and comprehensive solutions without compromising
                personal service.
              </p>
            </div>
          </div>

          <div className="progress-bars space-y-8">
            {progressData.map((item, index) => (
              <div key={index} className="prt-progress-bar">
                {/* Title */}
                <div className="progressbar-title mb-2 text-lg font-semibold text-gray-700">
                  {item.title}
                </div>
                {/* Progress Bar */}
                <div className="progress-bar-inner relative h-4 bg-gray-300 rounded-lg overflow-hidden">
                  <div
                    className="progress-bar bg-indigo-500 h-full"
                    style={{
                      width: `${item.percentage}%`,
                      transition: "width 0.6s ease-in-out",
                    }}
                  >
                    <span
                      className="progress-bar-percent absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-sm font-bold"
                      style={{ right: `${100 - item.percentage}%` }}
                    >
                      {item.percentage}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Image Display */}
        <div className="section-right flex-1 flex justify-center items-center">
        <img
            src={PersonalService}
            alt="Global Presence"
            className="w-full h-40 sm:h-60 md:h-80 lg:h-[34rem] max-w-md lg:max-w-full object-cover rounded-sm shadow-sm"
        />
        </div>
      </div>
    </div>
  );
};

export default PerService;
