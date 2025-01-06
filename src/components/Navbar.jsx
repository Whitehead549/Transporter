import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#091242] text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-400">
            ShippingSite
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/payment" className="hover:text-gray-400">
              Make Payment
            </Link>
          </li>
          <li>
            <Link to="/track" className="hover:text-gray-400">
              Track
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Contact Us
            </Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;