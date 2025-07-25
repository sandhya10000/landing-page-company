import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-6 mt-12 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-2">
            Infotech <span className="text-gray-700">Solutions</span>
          </h2>
          <p className="text-sm text-gray-600">
            We build scalable and smart digital solutions tailored to your
            business needs.
          </p>
          <div className="flex space-x-4 mt-4 text-xl text-blue-600">
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-blue-600">
                Careers
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-600">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/services/web" className="hover:text-blue-600">
                Web Development
              </a>
            </li>
            <li>
              <a href="/services/mobile" className="hover:text-blue-600">
                Mobile Apps
              </a>
            </li>
            <li>
              <a href="/services/uiux" className="hover:text-blue-600">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="/services/consulting" className="hover:text-blue-600">
                IT Consulting
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-1" />
              <span>
                B-17 NEW ASHOK NAGAR DELHI METRO PILLOR NO 164, New Ashok Nagar,
                New Delhi, Delhi 110091
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone />
              <a href="tel:+911234567890" className="hover:text-blue-600">
                +91 9065856630
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMail />
              <a
                href="mailto:contact@infotech.com"
                className="hover:text-blue-600"
              >
                contact@infotech.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Infotech Solutions. All rights reserved.{" "}
        <br />
        Website crafted by{" "}
        <span className="text-blue-600 font-medium">Sandhya Gupta</span>
      </div>
    </footer>
  );
};

export default Footer;
