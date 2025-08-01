import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { FiCode, FiPhoneCall, FiLayers, FiChevronDown } from "react-icons/fi";
import { MdContactSupport } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../assets/akps-logo.jpeg";

const menuItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Careers", link: "/careers" },
  { id: 4, name: "Blog", link: "/blog" },
  { id: 5, name: "Contact", link: "/contact" },
  {
    id: 6,
    name: "Our Services",
    link: "/service",
  },
];

const Navbar = ({ handleGetQuote }) => {
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo} // replace with your actual logo path
            alt="AKPS Logo"
            className="h-20 w-auto object-contain"
          />
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
