import React from "react";
import appImg from "../assets/app.jpg";
import softwareImage from "../assets/software.jpg";
import gameImage from "../assets/game.jpg";
import webdesignImage from "../assets/webdesign.jpg";
import erpcrmImage from "../assets/erpcrm.png";
const services = [
  {
    id: 1,
    title: "Software Development",
    description:
      "Custom desktop and cloud-based software solutions to boost your business efficiency.",
    image: softwareImage,
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Mobile app solutions for Android & iOS using React Native, Flutter, and native SDKs.",
    image: appImg,
  },
  {
    id: 3,
    title: "Game Development",
    description:
      "2D/3D game development services using Unity and Unreal Engine for all platforms.",
    image: gameImage,
  },
  {
    id: 4,
    title: "Web Designing",
    description:
      "Creative and responsive web designs focused on user experience and branding.",
    image: webdesignImage,
  },
  {
    id: 5,
    title: "ERP / CRM Development",
    description:
      "Streamline business operations with custom ERP and CRM system development.",
    image: erpcrmImage,
  },
];

const OurServices = () => {
  return (
    <div className="bg-white font-sans">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We offer a wide range of technology solutions tailored to help your
          business thrive.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Something Great Together
        </h2>
        <p className="mb-6 text-lg">
          Contact us for custom solutions tailored to your business needs.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-indigo-100 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default OurServices;
