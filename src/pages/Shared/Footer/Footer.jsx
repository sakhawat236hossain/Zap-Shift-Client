import React from "react";
import Logo from "../../../Components/Logo/Logo";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Coverage", to: "/coverage" },
    { name: "About Us", to: "/about-us" },
    { name: "Contact", to: "/contact" },
    { name: "Blog", to: "/blog" },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-black text-gray-300 py-12 px-5 md:px-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Left Side - Logo & Info */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <Logo />
          <p className="text-white font-semibold text-lg">Zap Shift</p>
          <p className="text-gray-400 max-w-xs">
            Fast, reliable parcel delivery with real-time tracking and zero hassle. Serving thousands of happy customers nationwide.
          </p>
        </div>

        {/* Center - Page Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 md:mt-0">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className="text-gray-300 hover:text-white transition duration-300 border-b-2 border-transparent hover:border-blue-500 pb-1"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side - Social + Newsletter */}
        <div className="flex flex-col items-center md:items-end gap-4 mt-4 md:mt-0">
          {/* Social Icons */}
          <div className="flex gap-4 text-gray-400">
            <span className="text-xl font-bold hover:text-red-500 cursor-pointer transition">X</span>
            <a href="#" className="hover:text-red-500 transition"><FaYoutube size={24} /></a>
            <a href="#" className="hover:text-blue-700 transition"><FaFacebookF size={24} /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram size={24} /></a>
          </div>

          {/* Newsletter */}
       <div className="flex flex-col sm:flex-row gap-2 mt-4 w-full sm:w-auto">
  {/* Email Input */}
  <input
    type="email"
    placeholder="Enter your email"
    className="
      w-full sm:w-64 
      px-4 py-3 
      rounded-l-lg 
      text-gray-900 
      placeholder-gray-400 
      focus:outline-none 
      focus:ring-2 focus:ring-blue-500 
      focus:border-blue-500 
      transition
    "
  />

  {/* Subscribe Button */}
  <button
    className="
      bg-blue-600 
      hover:bg-blue-700 
      text-white 
      font-semibold 
      px-5 py-3 
      rounded-r-lg 
      transition 
      transform hover:scale-105 
      shadow-md hover:shadow-lg
    "
  >
    Subscribe
  </button>
</div>

        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Zap Shift. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
