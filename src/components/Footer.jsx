// Footer.jsx
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Company Information */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-4">Your Company Name</h2>
          <p className="text-sm">
            Delivering quality services and exceptional value since [Year]. Contact us for innovative solutions tailored to your needs.
          </p>
          <p className="mt-4 text-sm">
            <strong>Email:</strong> contact@yourcompany.com
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="text-sm">
            <strong>Address:</strong> 123 Main Street, City, State, 12345
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-center md:text-left ml-[6.2rem]">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-white transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/sitemap" className="hover:text-white transition">
                Sitemap
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-white transition">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media & Newsletter */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
            />
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-sm">
          &copy; {currentYear} Your Company Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
