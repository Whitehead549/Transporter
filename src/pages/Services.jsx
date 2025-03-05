import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <section className="relative pt-[6rem]">
        {/* Content Section */}
        <div className="relative px-6 md:px-12 lg:px-20 pb-10">
          {/* Decorative Image Positioned Behind */}
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <img
              src="https://cdn.prod.website-files.com/637b8553d2b3433e9297cdb4/63bfdb147093626ba9d65cfa_S.svg"
              alt="Decorative S"
              className="w-72 h-72 opacity-10"
              loading="lazy"
            />
          </div>

          {/* Heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 relative z-10 text-[#091242]">
            Our Services
          </h1>

          {/* Introduction Paragraph */}
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed text-center mb-12 relative z-10 max-w-3xl mx-auto">
            At Rapidox Logistics, we offer a comprehensive range of logistics services designed to simplify your supply chain and meet your unique business needs. Our team of experts is dedicated to providing efficient, reliable, and cost-effective solutions that ensure your goods reach their destination safely and on time.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {/* Land Freight Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-[#091242]">Land Freight</h2>
              <p className="text-[#4A5568] text-base mb-4">
                Efficient and reliable transportation of goods by road, connecting you to markets across the country.
              </p>
              <ul className="list-disc list-outside pl-5 text-[#4A5568] text-base">
                <li className="mb-2">Time-definite deliveries</li>
                <li className="mb-2">Real-time tracking and monitoring</li>
                <li className="mb-2">Flexible scheduling and routing options</li>
                <li>Competitive pricing and customized solutions</li>
              </ul>
            </div>

            {/* Warehouse Management Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-[#091242]">Warehouse Management</h2>
              <p className="text-[#4A5568] text-base mb-4">
                Secure and organized storage solutions for your cargo with state-of-the-art facilities.
              </p>
              <ul className="list-disc list-outside pl-5 text-[#4A5568] text-base">
                <li className="mb-2">Receipt, storage, and handling of goods</li>
                <li className="mb-2">Inventory management and tracking</li>
                <li className="mb-2">Order fulfillment and packaging</li>
                <li>Customs clearance and compliance</li>
              </ul>
            </div>

            {/* Air Freight Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-[#091242]">Air Freight</h2>
              <p className="text-[#4A5568] text-base mb-4">
                Fast and reliable transportation of goods by air, ideal for time-sensitive shipments.
              </p>
              <ul className="list-disc list-outside pl-5 text-[#4A5568] text-base">
                <li className="mb-2">Priority and economy shipping options</li>
                <li className="mb-2">Real-time tracking and monitoring</li>
                <li className="mb-2">Customs clearance and compliance</li>
                <li>Competitive pricing and customized solutions</li>
              </ul>
            </div>

            {/* Sea Freight Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-[#091242]">Sea Freight</h2>
              <p className="text-[#4A5568] text-base mb-4">
                Cost-effective ocean freight solutions for international cargo with global coverage.
              </p>
              <ul className="list-disc list-outside pl-5 text-[#4A5568] text-base">
                <li className="mb-2">FCL and LCL options</li>
                <li className="mb-2">Real-time tracking and monitoring</li>
                <li className="mb-2">Customs clearance and compliance</li>
                <li>Competitive pricing and customized solutions</li>
              </ul>
            </div>

            {/* Route Optimization Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-[#091242]">Route Optimization</h2>
              <p className="text-[#4A5568] text-base mb-4">
                Advanced algorithms and data analysis to minimize transit times and reduce costs.
              </p>
              <ul className="list-disc list-outside pl-5 text-[#4A5568] text-base">
                <li className="mb-2">Analyze shipping routes and schedules</li>
                <li className="mb-2">Identify optimization opportunities</li>
                <li>Implement customized solutions</li>
              </ul>
            </div>

            {/* Package Delivery Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-[#091242]">Package Delivery</h2>
              <p className="text-[#4A5568] text-base mb-4">
                Convenient and trackable delivery solutions for packages of all sizes.
              </p>
              <ul className="list-disc list-outside pl-5 text-[#4A5568] text-base">
                <li className="mb-2">Fast and reliable delivery options</li>
                <li className="mb-2">Real-time tracking and monitoring</li>
                <li className="mb-2">Signature upon delivery</li>
                <li>Competitive pricing and customized solutions</li>
              </ul>
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div className="mt-16 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#091242]">
              Ready to Simplify Your Logistics?
            </h2>
            <p className="text-[#4A5568] text-base md:text-lg mb-8 max-w-3xl mx-auto">
              Contact us today to learn more about how we can streamline your supply chain and meet your logistics needs.
            </p>
            <Link
              to="/quote"
              className="inline-block bg-[#091242] text-white px-8 py-3 rounded-sm font-semibold hover:bg-[#4A5568] transition-colors duration-300"
            >
              Get Quote
            </Link>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-[2px] bg-gray-200 mt-8"></div>
      </section>
    </div>
  );
};

export default Services;