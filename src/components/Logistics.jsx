import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Logistics = () => {
  return (
    <div className="">
     {/* Banner Section */}
  <section className="text-[#000000] text-center py-0 sm:py-6 md:pt-8 lg:py-12 xl:pt-12">
    <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#091242] font-serif">
    Our Services
    </h1>
  </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-custom_gold text-4xl mb-4">
            <i className="fas fa-truck"></i>
          </div>
          <h2 className="font-medium text-md">Land Freight</h2>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-custom_gold text-4xl mb-4">
            <i className="fas fa-warehouse"></i>
          </div>
          <h2 className="font-medium text-md">Warehouse Management</h2>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-custom_gold text-4xl mb-4">
            <i className="fas fa-plane"></i>
          </div>
          <h2 className="font-medium text-md">Air Freight</h2>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-custom_gold text-4xl mb-4">
            <i className="fas fa-ship"></i>
          </div>
          <h2 className="font-medium text-md">Sea Freight</h2>
        </div>

        {/* Card 5 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-custom_gold text-4xl mb-4">
            <i className="fas fa-route"></i>
          </div>
          <h2 className="font-medium text-md">Route Optimization</h2>
        </div>

        {/* Card 6 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-custom_gold text-4xl mb-4">
            <i className="fas fa-box"></i>
          </div>
          <h2 className="font-medium text-md">Package Delivery</h2>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
