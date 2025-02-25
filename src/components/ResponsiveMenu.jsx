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

const ResponsiveMenu = ({ showMenu, setShowMenu}) => {

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-custom_blue dark:text-white px-8 pb-0 pt-16 text-white transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="Navbar_card">
        {/* Top section */}
       
        {/* Navlinks section */}
        <div className='text-white mt-12'>
          <ul className='space-y-4 text-xl'>
            {
              navbarLinks.map(({ name, link, id }) => (
                <li key={id}>
                  <Link
                    to={link}
                    onClick={() => setShowMenu(false)}
                    className='mb-5 inline-block text-white'
                  >
                    {name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
