import React from "react";
import "tailwindcss/tailwind.css";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[99999]">
      <div className="relative flex space-x-2">
        <div className="w-6 h-6 bg-[#091242] animate-bounce delay-100"></div>
        <div className="w-6 h-6 bg-[#091242] animate-bounce delay-200"></div>
        <div className="w-6 h-6 bg-[#091242] animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

export default Spinner;

