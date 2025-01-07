import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Logistics = () => {
  return (
    <div className="">
     {/* Banner Section */}
  <section className="bg-[#091242] text-white text-center py-6 sm:py-6 md:py-20 lg:py-12 xl:py-12">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
      Logistics Solutions
    </h1>
    <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
      Streamlining your operations with innovative and reliable solutions.
    </p>
  </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 max-w-6xl mx-auto">
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
