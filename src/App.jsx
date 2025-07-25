import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About"; // Make sure you created About.jsx
import Blog from "./components/Blog/Blog";
import Career from "./components/Career/Career";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <BrowserRouter>
        <Navbar handleGetQuote={handleOderPopup} />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} /> {/* Add this */}
          <Route path="/careers" element={<Career />} />
          {/* Add more routes here */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
