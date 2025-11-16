import React from "react";

import bannerImage1 from "../../assets/live-tracking.png";
import bannerImage2 from "../../assets/agent-pending.png";
import bannerImage3 from "../../assets/safe-delivery.png";

const ExtraSection = () => {
  return (
    <div className="my-20 px-4">
      
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-10">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Our Key Features
        </span>
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Card 1 */}
        <div className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-md">
          <img src={bannerImage1} alt="" className="w-20 h-20 object-contain" />

          {/* Vertical line */}
          <div className="h-20 border-l border-dashed border-gray-600"></div>

          {/* Text */}
          <div>
            <h3 className="text-lg font-bold">Live Parcel Tracking</h3>
            <p className="text-gray-600 text-sm">
              Stay updated in real-time with our live parcel tracking feature.
              Monitor your shipment’s journey and get instant status updates.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-md">
          <img src={bannerImage2} alt="" className="w-20 h-20 object-contain" />

          <div className="h-20 border-l border-dashed border-gray-600"></div>

          <div>
            <h3 className="text-lg font-bold">100% Safe Delivery</h3>
            <p className="text-gray-600 text-sm">
              We ensure your parcels are handled with the utmost care and
              delivered securely to their destination.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-md">
          <img src={bannerImage3} alt="" className="w-20 h-20 object-contain" />

          <div className="h-20 border-l border-dashed border-gray-600"></div>

          <div>
            <h3 className="text-lg font-bold">24/7 Call Center Support</h3>
            <p className="text-gray-600 text-sm">
              Our support team is available around the clock for any questions,
              updates, or delivery concerns.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExtraSection;
