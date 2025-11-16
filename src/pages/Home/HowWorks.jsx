import React from "react";
import { FaTruck, FaMoneyBillWave, FaWarehouse, FaBuilding } from "react-icons/fa";

const HowWorks = () => {
  const items = [
    {
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaTruck className="text-4xl text-blue-600" />,
    },
    {
      title: "Cash On Delivery",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaMoneyBillWave className="text-4xl text-green-600" />,
    },
    {
      title: "Delivery Hub",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaWarehouse className="text-4xl text-purple-600" />,
    },
    {
      title: "Booking SME & Corporate",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaBuilding className="text-4xl text-orange-600" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 
                     bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        How It Works
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl 
                       transition duration-300 border border-gray-100 text-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>

            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
