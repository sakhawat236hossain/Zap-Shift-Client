import React from "react";
import bannerImage1 from "../../assets/be-a-merchant-bg.png";
import location from "../../assets/location-merchant.png";

const Extra2 = () => {
  return (
    <div>
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center my-10">
        <span className="bg-gradient-to-r from-[#CAEB66] to-gray-500 bg-clip-text text-transparent">
          Become a Merchant Today
        </span>
      </h2>

      {/* Background Section */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerImage1})`,
        }}
      >
        <div className="bg-[#03373D]/80 w-full h-full rounded-2xl">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center p-10 gap-10">
            
            {/* Left Content */}
            <div className="text-white md:w-1/2 space-y-5">
              <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                Merchant and Customer Satisfaction is Our First Priority
              </h1>

              <p className="text-gray-200 text-sm md:text-base">
                We offer the lowest delivery charge with the highest value along 
                with 100% safety of your product. ZapShift Courier delivers your parcels 
                across Bangladesh right on time.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#CAEB66] text-black px-6 py-3 rounded-full font-semibold">
                  Become a Merchant
                </button>
                <button className="border-2 border-[#CAEB66] text-[#CAEB66] px-6 py-3 rounded-full font-semibold">
                  Earn with ZapShift Courier
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={location}
                alt="Location Map"
                className="w-full max-w-sm object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra2;
