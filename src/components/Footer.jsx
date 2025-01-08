import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-custom_blue  text-gray-200 py-8">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Company Information */}
        <div className="text-center md:text-left">
          <h2 className="text-sm md:text-base lg:text-lg font-bold mb-3">Your Company Name</h2>
          <p className="text-xs md:text-sm leading-relaxed">
            Delivering quality services and exceptional value since [Year]. Contact us for innovative solutions tailored to your needs.
          </p>
          <p className="mt-3 text-xs md:text-sm">
            <strong>Email:</strong> contact@yourcompany.com
          </p>
          <p className="text-xs md:text-sm">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="text-xs md:text-sm">
            <strong>Address:</strong> 123 Main Street, City, State, 12345
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/privacy-policy" className="text-xs md:text-sm hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="text-xs md:text-sm hover:text-white transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/about" className="text-xs md:text-sm hover:text-white transition">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media & Newsletter */}
        <div className="text-center md:text-left">
          <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-3">Connect with Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <a href="#" className="hover:text-white transition" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white transition" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white transition" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white transition" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white text-xs md:text-sm py-2 rounded hover:bg-indigo-600 transition"
            >
              Subscribe
            </button>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-xs md:text-sm">
          &copy; {currentYear} Your Company Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
