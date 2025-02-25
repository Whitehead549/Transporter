import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Support = () => {
  const cards = [
    {
      id: 1,
      content: "Global logistics services from a trusted partner",
      icon: <i className="fas fa-globe text-4xl "></i>,
      bgColor: "", // No background color for the first card
    },
    {
      id: 2,
      content: "Quick Delivery",
      icon: <i className="fas fa-shipping-fast text-4xl text-custom_gold"></i>,
      bgColor: "bg-custom_blue",
    },
    {
      id: 3,
      content: "Comprehensive Service",
      icon: <i className="fas fa-tools text-4xl text-custom_gold"></i>,
      bgColor: "bg-custom_blue",
    },
    {
      id: 4,
      content: "Individual Approach",
      icon: <i className="fas fa-handshake text-4xl text-custom_gold"></i>,
      bgColor: "bg-custom_blue",
    },
    {
      id: 5,
      content: "24/7 Online Support",
      icon: <i className="fas fa-headset text-4xl text-custom_gold"></i>,
      bgColor: "bg-custom_blue",
    },
    {
      id: 6,
      content: "Quality Guarantee",
      icon: <i className="fas fa-check-circle text-4xl text-custom_gold"></i>,
      bgColor: "bg-custom_blue",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:p-6 p-2">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`flex flex-col items-center justify-center text-center ${card.bgColor} ${card.id === 1 ? "" : "border border-gray-300 rounded-lg shadow-md"}`}
          style={{
            aspectRatio: "1.6 / 1", // Reduces height by 20% compared to the width
            width: "86%", // Increased width by 10%
            margin: "0 auto", // Centers cards within the grid
          }}
        >
                   <div className={`mb-4 ${card.id === 1 ? "text-[#091242]" : "text-white"}`}>
            {card.icon}
          </div>
          <p
            className={`font-extrabold tracking-wide ${
              card.id === 1
                ? "text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-[#091242] font-serif" // Increased font size and black text for id 1
                : "text-sm sm:text-md lg:text-lg text-custom_gold" // Original font size and gold text for others
            }`}
          >
            {card.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Support;
