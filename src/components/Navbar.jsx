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

  return (
    <div className="fixed top-0 left-0 w-full text-custom_blue bg-white shadow-md z-[9999]">
      {/* Main Navbar */}
      <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="Shipping Site Logo" className="h-10 w-40" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-custom_gold font-semibold"
                : "hover:text-custom_gold transition-colors duration-300"
            }
            onClick={() => window.scrollTo(0, 0)}
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
        <div className="md:hidden flex items-center">
          {showMenu ? (
            <IoClose
              onClick={toggleMenu}
              className="cursor-pointer text-custom_blue transition-transform transform hover:scale-110"
              size={30}
            />
          ) : (
            <CgMenuGridO
              onClick={toggleMenu}
              className="cursor-pointer text-custom_blue transition-transform transform hover:scale-110"
              size={30}
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
