import React from "react";
// import LogisticsImage from "../assets/logistics-image.svg"; // Replace with the correct path to your image

const About = () => {
  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <section className="relative pt-28">
        {/* Image Section */}
        {/* <div className="flex justify-center py-8">
          <img
            src={LogisticsImage}
            alt="Rapidox Logistics"
            className="w-48 h-16"
          />
        </div> */}

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
          <h1 className="text-xl md:text-4xl font-semibold text-center mb-6 relative z-10 text-[#091242]">
            Welcome to Rapidox Logistics
          </h1>

          {/* Paragraph */}
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed text-center mb-8 relative z-10 max-w-3xl mx-auto">
            At Rapidox Logistics, we're dedicated to providing seamless and efficient logistics solutions to businesses and individuals alike. Our team of experts is passionate about streamlining the movement of goods, ensuring that your cargo reaches its destination safely, on time, and within budget.
          </p>

          {/* Our Story Section */}
          <div className="mt-12 relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-[#091242]">
              Our Story
            </h2>
            <p className="text-[#4A5568] text-base md:text-lg leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Founded with a vision to revolutionize the logistics industry, Rapidox Logistics has established itself as a trusted partner for all your transportation and warehousing needs. Our extensive network, cutting-edge technology, and commitment to excellence enable us to deliver tailored solutions that meet the unique requirements of each client.
            </p>
          </div>

          {/* Our Services Section */}
          <div className="mt-12 relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-[#091242]">
              Our Services
            </h2>
            <div className="lg:text-center md:text-center">
              <p className="text-[#4A5568] text-base md:text-lg leading-relaxed text-center mb-8 max-w-3xl mx-auto">
                We offer a comprehensive range of logistics services designed to simplify your supply chain:
              </p>
              <ul className="list-disc list-outside pl-5 text-[#4A5568] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                <li className="mb-2">Land Freight: Efficient and reliable transportation of goods by road.</li>
                <li className="mb-2">Warehouse Management: Secure and organized storage solutions for your cargo.</li>
                <li className="mb-2">Air Freight: Fast and reliable air transportation for time-sensitive shipments.</li>
                <li className="mb-2">Sea Freight: Cost-effective ocean freight services for international cargo.</li>
                <li className="mb-2">Route Optimization: Expert analysis to minimize transit times and reduce costs.</li>
                <li>Package Delivery: Convenient and trackable delivery solutions for packages of all sizes.</li>
              </ul>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="mt-12 relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-[#091242]">
              Our Values
            </h2>
            <div className="lg:text-center md:text-center">
              <p className="text-[#4A5568] text-base md:text-lg leading-relaxed text-center mb-8 max-w-3xl mx-auto">
                At Rapidox Logistics, we're guided by a set of core values that drive our mission to deliver exceptional logistics services:
              </p>
              <ul className="list-disc list-outside pl-5 text-[#4A5568] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                <li className="mb-2">Customer Focus: We prioritize your needs and strive to exceed your expectations.</li>
                <li className="mb-2">Integrity: We operate with transparency, honesty, and ethics in all our interactions.</li>
                <li className="mb-2">Innovation: We embrace cutting-edge technology and innovative solutions to stay ahead of the curve.</li>
                <li>Teamwork: We collaborate with our clients, partners, and team members to achieve shared goals.</li>
              </ul>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-12 relative z-10">
            
            <p className="text-[#4A5568] text-base md:text-lg leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Whether you're looking for a reliable logistics partner or seeking customized solutions for your business, we're here to help. Contact us today to learn more about how we can streamline your supply chain and meet your logistics needs.
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-[2px] bg-gray-200 mt-8"></div>
      </section>
    </div>
  );
};

export default About;