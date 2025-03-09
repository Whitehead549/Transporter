import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../assets/navLogo.png"; // Adjust path based on your folder structure

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to handle Home link click
  const handleHomeClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    window.location.href = "/"; // Force a full page reload
  };

  return (
    <div className="fixed top-0 left-0 w-full text-custom_blue bg-white z-[999] pt-[1rem]">
      {/* Main Navbar */}
      <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center pt-[1.6rem]">
        {/* Logo Section */}
        <div className="flex-shrink-0 pt-[1rem]">
          <Link to="/" onClick={handleHomeClick}>
            <img src={logo} alt="Shipping Site Logo" className="h-8 w-22 sm:h-8 sm:w-20 md:h-8 md:w-22 lg:h-10 lg:w-32 " />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 items-center pt-[1.2rem]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-custom_gold font-semibold"
                : "hover:text-custom_gold transition-colors duration-300"
            }
            onClick={handleHomeClick} // Use the same handler for the Home link
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-custom_gold font-semibold"
                : "hover:text-custom_gold transition-colors duration-300"
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-custom_gold font-semibold"
                : "hover:text-custom_gold transition-colors duration-300"
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            Our Services
          </NavLink>
          <NavLink
            to="/track"
            className={({ isActive }) =>
              isActive
                ? "text-custom_gold font-semibold"
                : "hover:text-custom_gold transition-colors duration-300"
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            Track Package
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-custom_gold font-semibold"
                : "hover:text-custom_gold transition-colors duration-300"
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center pt-4">
          {showMenu ? (
            <IoClose
              onClick={toggleMenu}
              className="cursor-pointer text-custom_blue transition-transform transform hover:scale-110 "
              size={30}
            />
          ) : (
            <CgMenuGridO
              onClick={toggleMenu}
              className="cursor-pointer text-custom_blue transition-transform transform hover:scale-110"
              size={28}
            />
          )}
        </div>
      </div>

      {/* Responsive Menu */}
      {showMenu && (
        <div className="md:hidden bg-custom_blue-light absolute top-full left-0 w-full shadow-md transition-all duration-300">
          <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;