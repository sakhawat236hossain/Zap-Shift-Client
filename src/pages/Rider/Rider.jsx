import React from "react";
import { useForm, useWatch } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import { useLoaderData } from "react-router";
import rider from "../../assets/agent-pending.png";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Rider = () => {
  const { register, handleSubmit, control } = useForm();
  const { user } = UseAuth();
  const serviceCenters = useLoaderData();
const axiosSecure=useAxiosSecure()
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const riderRegion = useWatch({ control, name: "region" });

const handleBAriderApplication = (data) => {

  axiosSecure.post("/riders", data)
    .then(res => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your application has been submitted. We will reach you within 24 hours",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
};


  return (
    <div className="grid md:grid-cols-2 gap-10 items-start bg-white shadow-xl p-8 rounded-xl border border-gray-200">
      
      {/* LEFT SIDE: FORM */}
      <form onSubmit={handleSubmit(handleBAriderApplication)}>

        <h2 className="text-2xl font-bold text-[#062C30] mb-6">
          Rider Application Form
        </h2>

        {/* Rider Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-5 text-[#062C30] border-l-4 pl-3 border-[#9CD323]">
            Rider Details
          </h2>

          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-gray-700">rider Name</label>
            <input
              type="text"
              {...register("riderName")}
              className="input-style"
              defaultValue={user?.displayName}
            />
          </div>

          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-gray-700">Rider Email</label>
            <input
              type="email"
              {...register("riderEmail")}
              className="input-style"
              defaultValue={user?.email}
            />
          </div>

          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-gray-700">Region</label>
            <select {...register("region")} className="input-style">
              <option>Select Region</option>
              {regions.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-gray-700">District</label>
            <select {...register("districts")} className="input-style">
              <option>Select District</option>
              {districtsByRegion(riderRegion).map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-gray-700">Your Address</label>
            <input
              type="text"
              {...register("address")}
              className="input-style"
              placeholder="rider address"
            />
          </div>

          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-gray-700">Rider Contact No</label>
            <input
              type="text"
              {...register("riderContact")}
              className="input-style"
              placeholder="Phone number"
            />
          </div>

          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-gray-700">Pickup Instruction</label>
            <input
              type="text"
              {...register("pickupInstruction")}
              className="input-style"
              placeholder="Optional pickup instruction"
            />
          </div>
        </div>

        {/* More Details */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-5 text-[#062C30] border-l-4 pl-3 border-[#9CD323]">
            More Details
          </h2>

          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-gray-700">Driving License</label>
            <input
              type="text"
              {...register("license")}
              className="input-style"
              placeholder="Driving License"
            />
          </div>

          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-gray-700">NID</label>
            <input
              type="text"
              {...register("nid")}
              className="input-style"
              placeholder="NID No"
            />
          </div>

          <div className="flex flex-col gap-1 mb-4">
            <label className="font-semibold text-gray-700">Bike</label>
            <input
              type="text"
              {...register("Bike")}
              className="input-style"
              placeholder="Bike Model / Info"
            />
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4 mb-6">
          * PickUp Time 4pm–7pm Approx.
        </p>

        <button className="px-6 py-3 bg-[#9CD323] hover:bg-[#8AC21F] text-[#062C30] font-semibold rounded-md shadow-md transition duration-300 w-full">
         Apply as a Rider
        </button>
      </form>

      {/* RIGHT SIDE: IMAGE */}
      <div className="flex justify-center items-start">
        <img
          src={rider}
          alt="Rider"
          className="w-full h-auto max-w-sm object-contain drop-shadow-lg"
        />
      </div>

    </div>
  );
};

export default Rider;
