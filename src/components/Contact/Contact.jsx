import React from "react";
import { FiMail, FiPhoneCall, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">
            Get in Touch
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            We'd love to hear from you. Please fill out the form or reach out
            via the contact details below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FiMapPin className="text-3xl text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  Our Office
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  B-17 NEW ASHOK NAGAR DELHI METRO PILLOR NO 164, New Ashok
                  Nagar, New Delhi, Delhi 110091
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiPhoneCall className="text-3xl text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  Call Us
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  +91 9716062985
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMail className="text-3xl text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  Email
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  akpstechnology@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block mb-1 text-sm text-gray-700 dark:text-gray-200">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700 dark:text-gray-200">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700 dark:text-gray-200">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700 dark:text-gray-200">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
