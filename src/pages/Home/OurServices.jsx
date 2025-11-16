import React from "react";
import { motion } from "framer-motion";
import service from "../../assets/service.png";
import '../../index.css';

const services = [
  {
    img: service,
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in major cities. Express delivery available in Dhaka within 4–6 hours.",
  },
  {
    img: service,
    title: "Nationwide Delivery",
    desc: "Home delivery available in every district of Bangladesh within 48–72 hours.",
  },
  {
    img: service,
    title: "Fulfillment Solution",
    desc: "Inventory management, order processing, packaging, and after-sales support — all in one solution.",
  },
  {
    img: service,
    title: "Cash On Home Delivery",
    desc: "100% secure cash on delivery service anywhere in Bangladesh.",
  },
  {
    img: service,
    title: "Corporate Service / Contract In Logistics",
    desc: "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    img: service,
    title: "Parcel Return",
    desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const OurServices = () => {
  return (
    <section className="py-15 px-15 bg-[#03373D] rounded-2xl max-w-[1200px] mx-auto">
      {/* TITLE */}
      <div className="text-center mb-12 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Our Services
        </h1>
        <p className="max-w-2xl mx-auto text-gray-200">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl 
                       transition duration-300 border border-gray-100 
                       flex flex-col items-center text-center h-[346px] hover:bg-[#CAEB66]"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
