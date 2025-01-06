import React from "react";
// Import images locally
import logo1 from "../resource/partners/logo1.png";
import logo2 from "../resource/partners/logo2.jpg";
import logo3 from "../resource/partners/logo3.png";
import logo4 from "../resource/partners/logo4.png";

const Partners = () => {
  const partners = [
    { id: 1, src: logo1, alt: "Partner 1" },
    { id: 2, src: logo2, alt: "Partner 2" },
    { id: 3, src: logo3, alt: "Partner 3" },
    { id: 4, src: logo4, alt: "Partner 4" },
  ];

  return (
    <div className="container mx-auto py-0">
      {/* <h2 className="text-2xl font-bold text-center mb-3">Our Partners</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 ">
        {partners.map((partner) => (
          <div key={partner.id} className="flex justify-center items-center">
            <img
              src={partner.src}
              alt={partner.alt}
              className="w-[800px] h-[300px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
