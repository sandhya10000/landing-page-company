import React from "react";
import BannerImg from "../../assets/banner.jpeg";
import { GrSecure } from "react-icons/gr";
import { IoRocketOutline } from "react-icons/io5";
import { GiTechnoHeart } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";

const Banner = () => {
  return (
    <section className="min-h-[600px] flex justify-center items-center py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div className="space-y-6">
          <h1
            className="text-3xl sm:text-5xl font-bold leading-tight text-blue-600"
            data-aos="fade-up"
          >
            Transforming Ideas into Scalable Tech Solutions
          </h1>
          <p className="text-gray-600 dark:text-gray-300 tracking-wide leading-relaxed text-sm sm:text-base">
            At{" "}
            <span className="font-semibold text-gray-800 dark:text-white">
              Infotech Solutions
            </span>
            , we deliver modern software, rapid development, and innovative
            design to drive your business forward.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-4" data-aos="fade-up">
              <GrSecure className="text-3xl bg-blue-100 p-2 rounded-full" />
              <p className="text-gray-700 dark:text-white text-sm font-medium">
                Secure Architecture
              </p>
            </div>
            <div className="flex items-center gap-4" data-aos="fade-up">
              <IoRocketOutline className="text-3xl bg-green-100 p-2 rounded-full" />
              <p className="text-gray-700 dark:text-white text-sm font-medium">
                Faster Delivery
              </p>
            </div>
            <div className="flex items-center gap-4" data-aos="fade-up">
              <GiTechnoHeart className="text-3xl bg-purple-100 p-2 rounded-full" />
              <p className="text-gray-700 dark:text-white text-sm font-medium">
                Tech-Driven Team
              </p>
            </div>
            <div className="flex items-center gap-4" data-aos="fade-up">
              <MdSupportAgent className="text-3xl bg-yellow-100 p-2 rounded-full" />
              <p className="text-gray-700 dark:text-white text-sm font-medium">
                24/7 Support
              </p>
            </div>
          </div>
        </div>

        {/* Banner Image */}
        <div className="flex justify-center" data-aos="zoom-in">
          <img
            src={BannerImg}
            alt="Banner"
            className="max-w-[450px] w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
