import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-5">
      {/* Big Error Text */}
      <h1 className="text-9xl font-extrabold text-blue-600 mb-6">404</h1>

      {/* Error Message */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 text-center max-w-md mb-6">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      {/* Button Back to Home */}
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
