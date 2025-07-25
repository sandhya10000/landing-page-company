import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { FiCode, FiPhoneCall, FiLayers, FiChevronDown } from "react-icons/fi";
import { MdContactSupport } from "react-icons/md";
import { Link } from "react-router-dom";

const menuItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Careers", link: "/careers" },
  { id: 4, name: "Blog", link: "/blog" },
  { id: 5, name: "Contact", link: "/contact" },
];

const servicesDropdown = [
  { id: 1, name: "Web Development", icon: <FiCode />, link: "/services/web" },
  { id: 2, name: "Mobile Apps", icon: <FiLayers />, link: "/services/mobile" },
  {
    id: 3,
    name: "UI/UX Design",
    icon: <MdContactSupport />,
    link: "/services/uiux",
  },
  {
    id: 4,
    name: "Consulting",
    icon: <FiPhoneCall />,
    link: "/services/consulting",
  },
];

const Navbar = ({ handleGetQuote }) => {
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 tracking-wide">
          Infotech<span className="text-gray-700"> Solutions</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {item.name}
            </a>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <div className="flex items-center text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
              Services <FiChevronDown className="ml-1" />
            </div>
            {showServices && (
              <div className="absolute top-9 left-0 bg-white border shadow-lg rounded-lg w-56 z-10">
                {servicesDropdown.map((service) => (
                  <a
                    key={service.id}
                    href={service.link}
                    className="flex items-center px-4 py-3 text-sm hover:bg-blue-100 text-gray-700 transition"
                  >
                    <span className="mr-2 text-blue-600">{service.icon}</span>
                    {service.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Get Quote Button */}
        <button
          onClick={handleGetQuote}
          className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition font-medium"
        >
          Get a Quote
        </button>
      </div>
    </header>
  );
};

export default Navbar;
