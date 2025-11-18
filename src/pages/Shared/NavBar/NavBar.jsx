import React from "react";
import Logo from "../../../Components/Logo/Logo";
import { NavLink, Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";

const NavBar = () => {
  const { user, logOutUser } = UseAuth();

  const handleLogout = () => {
    logOutUser()
      .then(() => console.log("User logged out"))
      .catch((error) => console.log(error.message));
  };

  const links = (
    <>
      <li><NavLink to="/" className="hover:text-blue-600">Home</NavLink></li>
      <li><NavLink to="/Coverage" className="hover:text-blue-600">Coverage</NavLink></li>
      <li><NavLink to="/about-us" className="hover:text-blue-600">About Us</NavLink></li>
      <li><NavLink to="/Send-Parcel" className="hover:text-blue-600">Send Parcel</NavLink></li>
      <li><NavLink to="" className="hover:text-blue-600">Blog</NavLink></li>
      <li><NavLink to="" className="hover:text-blue-600">Contact</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-gray-300 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50 px-4 rounded-2xl lg:px-6">

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

        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          <Logo />
        </Link>
      </div>

      {/* Center Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 text-[16px]">
          {links}
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end gap-3">
        {user ? (
          <button onClick={handleLogout} className="btn btn-outline text-lg py-5 px-10 rounded-lg hover:bg-[#CAEB66] font-bold">
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="btn btn-outline text-lg py-5 px-10 rounded-lg hover:bg-[#CAEB66] font-bold"
          >
            Login
          </NavLink>
        )}
        <Link  to='/rider' className="btn btn-primary px-4 text-black py-5 text-lg rounded-lg">Be a rider</Link>
      </div>

    </div>
  );
};

export default NavBar;
