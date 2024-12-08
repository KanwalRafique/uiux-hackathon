import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="container mx-auto px-6 py-10">
        {/* Top Section: Logo and Social Icons with increased greyish background height */}
        <div className="flex justify-between items-center mb-6 bg-gray-100 py-8 shadow-md">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-600">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Links Section: All items side by side */}
        <div className="flex flex-wrap justify-between space-y-4 sm:space-y-0 mb-10">
          {/* Column 1: Company Info */}
          <div className="flex-1 min-w-[180px]">
            <h3 className="font-bold text-gray-800 font-Montserrat">Company Info</h3>
            <ul className="mt-4 space-y-2 font-Montserrat text-[#737373]">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
              <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            </ul>
          </div>

          {/* Column 2: Legal */}
          <div className="flex-1 min-w-[180px]">
            <h3 className="font-bold text-gray-800 font-Montserrat">Legal</h3>
            <ul className="mt-4 space-y-2 font-Montserrat text-[#737373]">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
              <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Features */}
          <div className="flex-1 min-w-[180px]">
            <h3 className="font-bold text-gray-800 font-Montserrat">Features</h3>
            <ul className="mt-4 space-y-2 font-Montserrat text-[#737373]">
              <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
              <li><a href="#" className="hover:text-blue-500">User Analytics</a></li>
              <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
              <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="flex-1 min-w-[180px]">
            <h3 className="font-bold text-gray-800 font-Montserrat">Resources</h3>
            <ul className="mt-4 space-y-2 font-Montserrat text-[#737373]">
              <li><a href="#" className="hover:text-blue-500">iOS & Android</a></li>
              <li><a href="#" className="hover:text-blue-500">Watch a Demo</a></li>
              <li><a href="#" className="hover:text-blue-500">Customers</a></li>
              <li><a href="#" className="hover:text-blue-500">API</a></li>
            </ul>
          </div>

          {/* Column 5: Get In Touch */}
          <div className="flex-1 min-w-[180px]">
            <h3 className="font-bold text-gray-800 font-Montserrat">Get In Touch</h3>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="font-Montserrat p-2 w-[321px] h-[58px] border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300 text-[#737373]"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Lore imp sum dolor Amit.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 bg-gray-50 text-[#737373] py-2 text-left font-montserrat font-bold">
          <p className="text-sm">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
