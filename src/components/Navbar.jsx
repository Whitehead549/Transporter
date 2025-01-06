import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./popups/Hamburger";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#091242] text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-400">
            ShippingSite
          </Link>
        </div>

        {/* Hamburger Icon */}
        <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 md:static absolute top-full left-0 w-full bg-[#091242] md:bg-transparent p-4 md:p-0`}
        >
          <li>
            <Link to="/" className="hover:text-gray-400 block md:inline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400 block md:inline">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-400 block md:inline">
              Services
            </Link>
          </li>
          <li>
            <Link to="/payment" className="hover:text-gray-400 block md:inline">
              Make Payment
            </Link>
          </li>
          <li>
            <Link to="/track" className="hover:text-gray-400 block md:inline">
              Track
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400 block md:inline">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
