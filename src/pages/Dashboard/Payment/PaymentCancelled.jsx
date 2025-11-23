import React from "react";
import { Link } from "react-router-dom";

const PaymentCancelled = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
      <h1 className="text-3xl font-semibold text-red-600 mb-4">
        Payment Cancelled ❌
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        Your payment was not completed. Please try again.
      </p>

      <Link to="/dashboard/my-parcels">
        <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-black rounded-md shadow-md transition">
          Try Again
        </button>
      </Link>
    </div>
  );
};

export default PaymentCancelled;
