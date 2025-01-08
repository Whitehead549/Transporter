import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Logistics = () => {
  return (
    <div className="">
     {/* Banner Section */}
  <section className="text-[#000000] text-center py-0 sm:py-6 md:pt-8 lg:py-12 xl:pt-12">
    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
      Logistics Solutions
    </h1>
  </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-custom_gold text-4xl mb-4">
            <i className="fas fa-truck"></i>
          </div>
          <h2 className="font-semibold text-lg">Freight Transport</h2>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-custom_gold text-4xl mb-4">
            <i className="fas fa-warehouse"></i>
          </div>
          <h2 className="font-semibold text-lg">Warehouse Management</h2>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-custom_gold text-4xl mb-4">
            <i className="fas fa-plane"></i>
          </div>
          <h2 className="font-semibold text-lg">Air Freight</h2>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-custom_gold text-4xl mb-4">
            <i className="fas fa-ship"></i>
          </div>
          <h2 className="font-semibold text-lg">Sea Freight</h2>
        </div>

        {/* Card 5 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-custom_gold text-4xl mb-4">
            <i className="fas fa-route"></i>
          </div>
          <h2 className="font-semibold text-lg">Route Optimization</h2>
        </div>

        {/* Card 6 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-custom_gold text-4xl mb-4">
            <i className="fas fa-box"></i>
          </div>
          <h2 className="font-semibold text-lg">Package Delivery</h2>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
