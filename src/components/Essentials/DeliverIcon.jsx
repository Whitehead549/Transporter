import React from 'react';
import dollar from '../../resource/dollar.png';  // Use a higher-res version if possible
import packages from '../../resource/package.png';  // Use a higher-res version if possible
import logisticsImage from '../../assets/new_section.jpg';  // Import an image for the left side

// Card Component
const Card = ({ image, alt, title, description }) => {
  return (
    <div className="p-4 flex flex-col sm:flex-row items-center gap-6 max-w-xl mx-auto transition-all hover:shadow-lg">
      <div className="w-24 h-24 sm:w-32 sm:h-42 flex-shrink-0">
        {/* Ensure the image is of high quality and properly displayed */}
        <img
          src={image}
          alt={alt}
          className="object-contain w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-between text-center sm:text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
          {title}
        </h3>
        <p className="text-sm sm:text-md text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// DeliverIcon Component
const DeliverIcon = () => {
  const cardData = [
    {
      image: dollar,
      alt: 'Affordable Cost',
      title: 'Affordable Cost',
      description: 'Affordable delivery services tailored to your needs.',
    },
    {
      image: packages,
      alt: 'Fast Delivery',
      title: 'Fast Delivery',
      description: 'Reliable and swift delivery systems for all your needs.',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 max-w-7xl mx-auto px-4 sm:px-6 pt-6">
      {/* Left side: Image */}
      <div className="flex-1 h-full">
        <img
          src={logisticsImage}
          alt="Logistics"
          className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-md"
        />
      </div>

      {/* Right side: Content */}
      <div className="flex-1 h-full flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-wide leading-tight mb-4 lg:mb-8">
            <span className="text-custom_gold">World's Leading</span> <br />
            <span className="text-secondary">Contract Logistics Provider</span>
          </h2>
          <p className="text-sm sm:text-md lg:text-lg text-gray-600 leading-relaxed mx-auto lg:mx-0 max-w-2xl">
            Spring Co Logistics offers freight forwarding, contract logistics, and supply chain solutions that connect your business to suppliers and markets around the world. Air, ocean (FCL/LCL), and road freight, and multi-modal solutions to move your goods.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-6 flex flex-col gap-4">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              alt={card.alt}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliverIcon;
