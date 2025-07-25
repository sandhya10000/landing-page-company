import React from "react";
import AboutImg from "../../assets/about.jpg"; // Replace with your actual image

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div data-aos="zoom-in">
          <img
            src={AboutImg}
            alt="About us"
            className="rounded-xl shadow-lg w-full max-h-[450px] object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold text-blue-600 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Welcome to <strong>Infotech Solutions</strong>, where innovation
            meets excellence. We specialize in delivering top-notch digital
            solutions to empower businesses in a fast-paced, tech-driven world.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">✔</span>
              Experienced Team of Developers, Designers & Consultants.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">✔</span>
              100+ Successful Projects Across Multiple Industries.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">✔</span>
              Customer-Centric Approach with Agile Methodology.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">✔</span>
              Continuous Support & Maintenance After Deployment.
            </li>
          </ul>

          <div className="mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
