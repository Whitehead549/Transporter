import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/navLogo.png";  // Adjust the path as needed


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-white text-custom_blue shadow-[0px_-5px_10px_rgba(0,0,0,0.1)] pt-5 pb-0.5 md:pl-10">
        <div className="container mx-auto px-4 md:px-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-8 xl:gap-15 md:gap-4">
          {/* Column 1: Company Information */}
          <div className="text-center md:text-left lg:pl-[2rem] xl:pl-[2rem]">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="w-32 md:w-32 h-9 mx-auto md:mx-0 mb-3"
          />

            <p className="text-xs md:text-sm leading-relaxed">
              Delivering your goods with speed and unwavering reliability. We
              understand time is critical, and we're committed to getting your
              shipments where they need to be, when they need to be there.
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div className="text-center md:text-left lg:pl-[8rem] xl:pl-[9rem] md:pl-[3.5rem]">
            <h2 className="text-sm md:text-base font-bold pb-[1.2rem]">Contact Information</h2>
            <p className="text-xs md:text-sm pb-2 lg:pb-0.5">
              <strong>Email:</strong> contact@rapidoxlogistics.com
            </p>
            <p className="text-xs md:text-sm pb-2">
              <strong>Address:</strong> 620 Emerson Road Alexandria, LA 71302
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
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
          </div>

          {/* Column 3: Legal Links */}
          <div className="text-center md:text-left lg:pl-[8.7rem] lg:pl-[10.7rem] md:pl-[4.5rem]">
            <h3 className="text-sm md:text-base font-semibold pb-[0.8rem]">Legal</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/privacypolicy" className="text-xs md:text-sm hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/termsofservice" className="text-xs md:text-sm hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-gray-700 mt-1 py-4 text-center">
          <p className="text-xs md:text-sm">&copy; {currentYear} Rapidox Logistics. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
