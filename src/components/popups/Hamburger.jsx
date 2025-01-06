import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Hamburger = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="text-white text-2xl md:hidden focus:outline-none"
      aria-label="Toggle menu"
    >
      {isOpen ? <FiX /> : <FiMenu />}
    </button>
  );
};

export default Hamburger;
