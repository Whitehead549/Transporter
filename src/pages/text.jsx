import React, { useState } from "react";
import Modal from "../components/Essentials/Modal"; // Import the Modal component
import ContactUsImage from "../assets/ContactMe11.png"; // Import the local image

const ContactUs = () => {
  // State for form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    houseAddress: "",
    country: "",
    phoneNumber: "",
    whatsappNumber: "",
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
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a successful form submission
    setModalMessage("Thank you for contacting us! We'll respond within 24 hours.");
    setIsModalOpen(true);

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      houseAddress: "",
      country: "",
      phoneNumber: "",
      whatsappNumber: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#F3F3F3] overflow-x-hidden">
    <section className="relative px-6 md:px-12 lg:px-20 py-12 pt-24">
      {/* Replace the <h1> with an image */}
      <div className="flex justify-center mb-8">
        <img
          src={ContactUsImage}
          alt="Contact Us"
          className="w-full max-w-[130px] sm:max-w-[150px] md:max-w-[150px] lg:max-w-[180px]" // Smaller size
        />
      </div>
  
      {/* Contact Information */}
      <div className="text-center mb-12">
        <p className="text-[#4A5568] text-base md:text-lg mb-4">
          At Velo Trust Logistics, we value your feedback and look forward to hearing from you. Whether you have a question, comment, or need assistance with a shipment, our team is here to help.
        </p>
        <p className="text-[#4A5568] text-base md:text-lg mb-2">
          <strong className="text-[#091242]">Email:</strong> contact@velotrustlogistics.com
        </p>
        <p className="text-[#4A5568] text-base md:text-lg">
          <strong className="text-[#091242]">Address:</strong> 620 Emerson Road, Alexandria, LA 71302
        </p>
      </div>
  
      {/* Contact Form */}
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-lg md:text-xl font-semibold text-center mb-6 text-[#091242]">
          Please complete the form below and we'll respond within 24 hours:
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-[#091242]">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-[#091242] rounded-md shadow-sm focus:ring-[#FFCC44] focus:border-[#FFCC44]"
              placeholder="Enter your full name"
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
              className="mt-1 block w-full px-4 py-2 border border-[#091242] rounded-md shadow-sm focus:ring-[#FFCC44] focus:border-[#FFCC44]"
              placeholder="Enter your email address"
              required
            />
          </div>
  
          {/* House Address */}
          <div>
            <label htmlFor="houseAddress" className="block text-sm font-medium text-[#091242]">
              House Address
            </label>
            <input
              type="text"
              id="houseAddress"
              name="houseAddress"
              value={formData.houseAddress}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-[#091242] rounded-md shadow-sm focus:ring-[#FFCC44] focus:border-[#FFCC44]"
              placeholder="Enter your house address"
              required
            />
          </div>
  
          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-[#091242]">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-[#091242] rounded-md shadow-sm focus:ring-[#FFCC44] focus:border-[#FFCC44]"
              placeholder="Enter your country"
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
              className="mt-1 block w-full px-4 py-2 border border-[#091242] rounded-md shadow-sm focus:ring-[#FFCC44] focus:border-[#FFCC44]"
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
              className="mt-1 block w-full px-4 py-2 border border-[#091242] rounded-md shadow-sm focus:ring-[#FFCC44] focus:border-[#FFCC44]"
              placeholder="Enter your WhatsApp number"
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
              className="mt-1 block w-full px-4 py-2 border border-[#091242] rounded-md shadow-sm focus:ring-[#FFCC44] focus:border-[#FFCC44]"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
  
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#091242] text-white font-semibold text-lg rounded-full shadow-md hover:bg-[#FFCC44] hover:text-[#091242] transition-transform transform hover:scale-105"
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
        title="Thank You!"
        message={modalMessage}
      />
    </section>
  </div>
  );
};

export default ContactUs;