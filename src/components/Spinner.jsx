import React from "react";
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[99999]">
      <motion.div
        className="w-16 h-16 border-4 border-t-[#091242] border-gray-200 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

export default Spinner;
