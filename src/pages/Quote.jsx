import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../components/Essentials/Modal"; // Import the Modal component

const Quote = () => {
  // State for form data
  const [formData, setFormData] = useState({
    shippersName: "",
    receiversName: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    packageType: "",
    packageWeight: "",
    packageDimensions: "",
    pickupAddress: "",
    deliveryAddress: "",
    message: "",
  });

  // State for modal (success/error message)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace these with your EmailJS details
    const serviceID = "service_i2o34yr"; // Replace with your EmailJS service ID
    const templateID = "template_8t6es1m"; // Replace with your EmailJS template ID
    const publicKey = "83KLJXf1SFAdWkAfI"; // Replace with your EmailJS public key

    // EmailJS parameters
    const templateParams = {
      shippersName: formData.shippersName,
      receiversName: formData.receiversName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      whatsappNumber: formData.whatsappNumber,
      packageType: formData.packageType,
      packageWeight: formData.packageWeight,
      packageDimensions: formData.packageDimensions,
      pickupAddress: formData.pickupAddress,
      deliveryAddress: formData.deliveryAddress,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log("SUCCESS!", response.status, response.text);
      setModalMessage("Your quote request has been sent successfully!");
      setIsModalOpen(true);

      // Reset form
      setFormData({
        shippersName: "",
        receiversName: "",
        email: "",
        phoneNumber: "",
        whatsappNumber: "",
        packageType: "",
        packageWeight: "",
        packageDimensions: "",
        pickupAddress: "",
        deliveryAddress: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error);
      setModalMessage("Something went wrong. Please try again.");
      setIsModalOpen(true);
    }
  };

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <section className="relative px-6 md:px-12 lg:px-20 py-12 pt-24">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-8">
          Get Quote
        </h1>

        {/* Description */}
        <p className="text-center text-gray-600 mb-12">
          Fill out the form below to receive a customized quote for your logistics needs.
        </p>

        {/* Quote Form */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Shipper’s Name */}
            <div>
              <label htmlFor="shippersName" className="block text-sm font-medium text-[#091242]">
                Shipper’s Name
              </label>
              <input
                type="text"
                id="shippersName"
                name="shippersName"
                value={formData.shippersName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
                placeholder="Enter shipper's name"
                required
              />
            </div>

            {/* Receiver’s Name */}
            <div>
              <label htmlFor="receiversName" className="block text-sm font-medium text-[#091242]">
                Receiver’s Name
              </label>
              <input
                type="text"
                id="receiversName"
                name="receiversName"
                value={formData.receiversName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
                placeholder="Enter receiver's name"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#091242]">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#091242]">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label htmlFor="whatsappNumber" className="block text-sm font-medium text-[#091242]">
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
                placeholder="Enter your WhatsApp number"
                required
              />
            </div>

            {/* Package Type */}
            <div>
              <label htmlFor="packageType" className="block text-sm font-medium text-[#091242]">
                Package Type
              </label>
              <input
                type="text"
                id="packageType"
                name="packageType"
                value={formData.packageType}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
                placeholder="Enter package type"
                required
              />
            </div>

            {/* Package Weight */}
            <div>
              <label htmlFor="packageWeight" className="block text-sm font-medium text-[#091242]">
                Package Weight
              </label>
              <input
                type="text"
                id="packageWeight"
                name="packageWeight"
                value={formData.packageWeight}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
                placeholder="Enter package weight"
                required
              />
            </div>

            {/* Package Dimensions */}
            <div>
              <label htmlFor="packageDimensions" className="block text-sm font-medium text-[#091242]">
                Package Dimensions
              </label>
              <input
                type="text"
                id="packageDimensions"
                name="packageDimensions"
                value={formData.packageDimensions}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
                placeholder="Enter package dimensions"
                required
              />
            </div>

            {/* Pickup Address */}
            <div>
              <label htmlFor="pickupAddress" className="block text-sm font-medium text-[#091242]">
                Pickup Address
              </label>
              <input
                type="text"
                id="pickupAddress"
                name="pickupAddress"
                value={formData.pickupAddress}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
                placeholder="Enter pickup address"
                required
              />
            </div>

            {/* Delivery Address */}
            <div>
              <label htmlFor="deliveryAddress" className="block text-sm font-medium text-[#091242]">
                Delivery Address
              </label>
              <input
                type="text"
                id="deliveryAddress"
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
                placeholder="Enter delivery address"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#091242]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#000300] focus:border-[#000300]"
                placeholder="Enter any additional details"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-[#091242] text-white font-semibold text-lg rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg transition-transform transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Modal for Success/Error Messages */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Result"
          message={modalMessage}
        />
      </section>
    </div>
  );
};

export default Quote;