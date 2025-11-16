import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="py-16 px-5 md:px-16">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold 
          bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Our Company
        </h1>

        <p className="text-center max-w-3xl mx-auto text-gray-600 mt-4 leading-7">
          We are committed to providing fast, secure, and reliable parcel delivery
          across the country. Our mission is to combine smart technology, trained
          professionals, and a customer-first system that ensures every shipment is
          delivered with care, accuracy, and transparency.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 bg-white px-5 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Fast Delivery</h3>
            <p className="text-gray-600 leading-7">
              Our optimized delivery routes and smart logistics system ensure your
              parcels reach their destination faster than traditional methods.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Secure Handling</h3>
            <p className="text-gray-600 leading-7">
              Every shipment is handled with care by trained professionals, ensuring
              safety, security, and zero damage during transit.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Smart Technology
            </h3>
            <p className="text-gray-600 leading-7">
              Our real-time tracking system keeps customers updated at every moment,
              ensuring transparency and complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-16 px-5 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Story</h2>
        <p className="text-gray-700 leading-8 mb-5">
          Our company started with a mission to transform Bangladesh’s delivery
          experience. We noticed that traditional courier services often failed to
          provide reliability, transparency, and timely delivery. From that point on,
          we started building a modern, technology-driven delivery system that puts
          customer experience at the center.
        </p>

        <p className="text-gray-700 leading-8 mb-5">
          Day by day, with continuous improvement, smart planning, and customer
          feedback, our operations grew stronger. Today, we proudly serve thousands of
          users across multiple districts, ensuring seamless delivery with accuracy and
          dedication.
        </p>

        <p className="text-gray-700 leading-8">
          Our story is still being written — with every parcel we deliver, every
          milestone we achieve, and every customer we satisfy.
        </p>
      </section>

      {/* TEAM SECTION */}
      <section className="bg-white py-16 px-5 md:px-16">
        <h2 className="text-3xl font-bold text-blue-600 text-center">
          Meet Our Team
        </h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mt-3">
          Our dedicated riders, smart operations team, professional support staff, and
          tech experts work tirelessly to ensure your deliveries are always on time.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto">

          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700">Operations Team</h3>
            <p className="text-gray-600 leading-7 mt-2">
              Coordinates routes, oversees shipments, and ensures smooth day-to-day
              logistics across regions.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700">Delivery Riders</h3>
            <p className="text-gray-600 leading-7 mt-2">
              Our trained riders work with responsibility and commitment to deliver
              parcels safely and on time.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-700">Tech & Support</h3>
            <p className="text-gray-600 leading-7 mt-2">
              Builds and maintains smart tools, tracking systems, and ensures 24/7
              customer support excellence.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER MESSAGE */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-600">
          We Deliver Trust — Not Just Parcels
        </h2>
        <p className="text-gray-600 mt-3">
          Thank you for choosing us as your delivery partner.
        </p>
      </section>

    </div>
  );
};

export default AboutPage;
