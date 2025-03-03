import React from "react";

const Steps = () => {
  return (
    <section className="py-16">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-extrabold text-[#091242] mb-12 leading-tight">
      Ship your package in just 4 super simple steps
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Step 1 */}
      <div className="flex flex-col items-center p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-custom_blue text-custom_gold shadow-md mb-6">
          <i className="fas fa-calculator text-3xl"></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-custom_blue">
          Get<br/>Quote
        </h3>
        <p className="text-sm text-gray-600 text-center">
          Get an instant price estimate for your shipment.
        </p>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-center p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-custom_blue text-custom_gold shadow-md mb-6">
          <i className="fas fa-file-invoice text-3xl"></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-custom_blue">
          Documentation & Payment
        </h3>
        <p className="text-sm text-gray-600 text-center">
          Submit the required documents and make payments.
        </p>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-center p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-custom_blue text-custom_gold shadow-md mb-6">
          <i className="fas fa-shipping-fast text-3xl"></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-custom_blue">
          Track Your <br/>Package
        </h3>
        <p className="text-sm text-gray-600 text-center">
          Monitor your shipment status in real time.
        </p>
      </div>

      {/* Step 4 */}
      <div className="flex flex-col items-center p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-custom_blue text-custom_gold shadow-md mb-6">
          <i className="fas fa-box-open text-3xl"></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-custom_blue">
          Package Safely Delivered
        </h3>
        <p className="text-sm text-gray-600 text-center">
          Receive your package securely and on time.
        </p>
      </div>
    </div>
  </div>
</section>
  );
};

export default Steps;
