import React from "react";

const Steps = () => {
  return (
    <section className="pb-12 ">
      <div className="container mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-[#091242] mb-8 leading-tight tracking-wide">
        Ship your package in just 4 super simple Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
          {/* Step 1 */}
          <div
            className="flex flex-col items-center group transition duration-300 ease-in-out transform hover:scale-110 hover:animate-pop"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-custom_blue text-custom_gold shadow-md mb-6">
              <i className="fas fa-calculator text-3xl"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-800 group-hover:text-custom_blue">
              Request Quote
            </h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Get an instant price estimate for your shipment.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className="flex flex-col items-center group transition duration-300 ease-in-out transform hover:scale-110 hover:animate-pop"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-custom_blue text-custom_gold shadow-md mb-6">
              <i className="fas fa-file-invoice text-3xl"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-800 group-hover:text-custom_blue">
              Documentation & Payment
            </h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Submit the required documents and complete payment securely.
            </p>
          </div>

          {/* Step 3 */}
          <div
            className="flex flex-col items-center group transition duration-300 ease-in-out transform hover:scale-110 hover:animate-pop"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-custom_blue text-custom_gold shadow-md mb-6">
              <i className="fas fa-shipping-fast text-3xl"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-800 group-hover:text-custom_blue">
              Track Package
            </h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Monitor your shipment status in real time.
            </p>
          </div>

          {/* Step 4 */}
          <div
            className="flex flex-col items-center group transition duration-300 ease-in-out transform hover:scale-110 hover:animate-pop"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-custom_blue text-custom_gold shadow-md mb-6">
              <i className="fas fa-box-open text-3xl"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-800 group-hover:text-custom_blue">
              Package Safely Delivered
            </h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Receive your package securely and on time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
