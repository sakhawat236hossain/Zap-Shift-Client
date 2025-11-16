import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const position = [23.685, 90.3563];

const Coverage = () => {
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const location = form.location.value;
    const district = serviceCenters.find((center) =>
      center.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district && mapRef.current) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.setView(coord, 12);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-6">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6">
        We are available in 64 districts
      </h2>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="max-w-md mx-auto mb-6">
        <div className="relative">
          <input
            type="search"
            name="location"
            id="search"
            placeholder="Search district..."
            className="block w-full p-3 pl-10 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <svg
            className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
          </svg>
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white text-xs px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-400"
          >
            Search
          </button>
        </div>
      </form>

      {/* Map */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] border mx-auto rounded-lg overflow-hidden">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="w-full h-full"
          whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker position={[center.latitude, center.longitude]} key={index}>
              <Popup>
                <strong>{center.district}</strong> <br />
                Service Area:{" "}
                {Array.isArray(center.covered_area)
                  ? center.covered_area.join(", ")
                  : center.covered_area}
                .
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
