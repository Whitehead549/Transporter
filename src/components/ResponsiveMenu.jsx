import React from 'react';
import { Link } from "react-router-dom";

const navbarLinks = [
  {
    name: "Home",
    link: "/",
    id: 1,
  },
  {
    name: "About Us",
    link: "/about",
    id: 2,
  },
  {
    name: "Our Services",
    link: "/services",
    id: 3,
  },
  {
    name: "Track Package",
    link: "/track",
    id: 4,
  },
  {
    name: "Contact Us",
    link: "/contact",
    id: 5,
  },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  // Function to handle Home link click
  const handleHomeClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    window.location.href = "/"; // Force a full page reload
    setShowMenu(false); // Close the responsive menu
  };

  // Function to handle other link clicks
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    setShowMenu(false); // Close the responsive menu
  };

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-12 z-20 h-screen flex h-[68%] w-[56%]  flex-col justify-between bg-custom_blue dark:text-white px-8 pb-0 pt-16 text-white transition-all duration-200 md:hidden rounded-r-xl shadow-md `}
    >
      <div className="Navbar_card">
        {/* Top section */}

        {/* Navlinks section */}
        <div className="text-white mt-4">
          <ul className="space-y-2 text-sm md:text-md">
            {navbarLinks.map(({ name, link, id }) => (
              <li key={id}>
                {name === "Home" ? (
                  // Home link with custom onClick handler
                  <Link
                    to={link}
                    onClick={handleHomeClick} // Apply custom handler for Home
                    className="mb-5 inline-block text-white"
                  >
                    {name}
                  </Link>
                ) : (
                  // Other links with default behavior
                  <Link
                    to={link}
                    onClick={handleLinkClick} // Apply scroll and close menu for other links
                    className="mb-5 inline-block text-white"
                  >
                    {name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;