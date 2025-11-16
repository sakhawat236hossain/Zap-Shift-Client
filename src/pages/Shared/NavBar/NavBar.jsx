import React from "react";
import Logo from "../../../Components/Logo/Logo";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = (
    <>
      <li><NavLink to="" className="hover:text-blue-600">Services</NavLink></li>
      <li><NavLink to="/Coverage" className="hover:text-blue-600">Coverage</NavLink></li>
      <li><NavLink to="/about-us" className="hover:text-blue-600">About Us</NavLink></li>
      <li><NavLink to="" className="hover:text-blue-600">Pricing</NavLink></li>
      <li><NavLink to="" className="hover:text-blue-600">Blog</NavLink></li>
      <li><NavLink to="" className="hover:text-blue-600">Contact</NavLink></li>
    </>
  );

  return (
    <div className="
      navbar 
      bg-gray-300
      backdrop-blur-md 
      shadow-lg 
      border-b 
      border-gray-200 
      sticky 
      top-0 
      z-50 
      px-4 
      rounded-2xl
      lg:px-6
    ">

      {/* Left Section */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white shadow-xl rounded-xl mt-3 p-3 w-52">
            {links}
          </ul>
        </div>

        <a className="text-xl font-bold">
          <Logo />
        </a>
      </div>

      {/* Center Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 text-[16px]">
          {links}
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        <a className="btn bg-blue-600 text-white px-5 hover:bg-blue-700 shadow-md rounded-xl">
          Get Started
        </a>
      </div>

    </div>
  );
};

export default NavBar;
