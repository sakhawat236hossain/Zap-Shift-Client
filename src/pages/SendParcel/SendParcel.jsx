import React, { use } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSEcure from "../../Hooks/useAxiosSecure";
import UseAuth from "../../Hooks/UseAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const axiosSecure =useAxiosSEcure()
  const {user}=UseAuth()
  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);

  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const ReceiverRegion = useWatch({ control, name: "ReceiverRegion" });
  //   console.log(regions);

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

 const handleSendParcel = (data) => {
  console.log("Form Data:", data);

  const isDocument = data.parcelType === "document"; // lowercase 'document' as in radio value
  const isSameDistricts = data.senderDistricts === data.ReceiverDistricts;
  const parcelWeight = parseFloat(data.parcelWeight) || 0; // ensure number

  let cost = 0;

  if (isDocument) {
    // Document pricing
    cost = isSameDistricts ? 60 : 80;
  } else {
    // Non-Document pricing
    if (parcelWeight <= 3) {
      cost = isSameDistricts ? 110 : 150;
    } else {
      // Extra weight charges
      const extraWeight = parcelWeight - 3;
      if (isSameDistricts) {
        cost = 110 + extraWeight * 40;
      } else {
        cost = 150 + extraWeight * 40 + 40; // +40 extra for outside city/district
      }
    }
  }

Swal.fire({
  title: "Agree with the cost?",
  text: `You will be charged ${cost} Tk`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "I agree"
}).then((result) => {
  if (result.isConfirmed) {
    axiosSecure.post("/postParcel",data)
    .then(res=>{
      console.log("after saving parcel",res.data);
    })
    // Swal.fire({
    //   title: "Confirmed!",
    //   text: "Your parcel booking has been confirmed.",
    //   icon: "success"
    // });
  }
});

};


  // UPDATED STYLES
  const labelStyle =
    "block mb-1 text-sm font-semibold text-gray-600 normal-case";
  const inputStyle =
    "w-full border border-gray-300 rounded-md p-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9CD323]/40 focus:border-[#9CD323]";
  const selectStyle =
    "w-full border border-gray-300 rounded-md p-2 text-sm bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9CD323]/40 focus:border-[#9CD323]";

  return (
    <div className="px-6 py-4">
      {/* PAGE TITLE */}
      <h2 className="text-3xl font-bold mb-6 text-[#062C30]">Add Parcel</h2>

      {/* SUB TITLE */}
      <h1 className="text-base font-medium mb-6 text-gray-600">
        Enter your parcel details
      </h1>

      {/* FORM START */}
      <form onSubmit={handleSubmit(handleSendParcel)}>
        {/* Parcel type */}
        <div className="flex items-center gap-6 mb-10">
          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <input
              type="radio"
              value="document"
              defaultChecked
              {...register("parcelType")}
            />
            <span>Document</span>
          </label>

          <label className="flex items-center gap-2 text-gray-700 font-medium">
            <input
              type="radio"
              value="nonDocument"
              {...register("parcelType")}
            />
            <span>Not-Document</span>
          </label>
        </div>

        {/* PARCEL INFO */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <label className={labelStyle}>Parcel Name</label>
            <input
              type="text"
              className={inputStyle}
              {...register("parcelName")}
              placeholder="Enter parcel name"
            />
          </div>

          <div>
            <label className={labelStyle}>Parcel Weight (KG)</label>
            <input
              de
              type="number"
              className={inputStyle}
              {...register("parcelWeight")}
              placeholder="Enter weight in KG"
            />
          </div>
        </div>

        {/* TWO MAIN COLUMNS */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* SENDER */}
          <div>
            <h2 className="text-xl font-bold mb-3 text-[#062C30]">
              Sender Details
            </h2>

            <label className={labelStyle}>Sender Name</label>
            <input
              type="text"
              className={inputStyle}
              {...register("senderName")}
              placeholder="Sender name"
              defaultValue={user?.displayName}
            />

            {/* Sender Email */}
            <label className={`${labelStyle} mt-4`}>Sender Email</label>
            <input
              type="email"
              className={inputStyle}
              {...register("senderEmail")}
              placeholder="Sender email"
              defaultValue={user?.email}
            />
            {/*  sender Region*/}
            <label className={`${labelStyle} mt-4`}>
              Sender Pickup Warehouse
            </label>
            <select className={selectStyle} {...register("senderRegion")}>
              <option>Select Wire house</option>

              {regions.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>
            {/* Districts */}
            <label className={`${labelStyle} mt-4`}>
              Sender Pickup Districts
            </label>
            <select className={selectStyle} {...register("senderDistricts")}>
              <option>Select Districts</option>

              {districtsByRegion(senderRegion).map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>

            <label className={`${labelStyle} mt-4`}>Address</label>
            <input
              type="text"
              className={inputStyle}
              {...register("senderAddress")}
              placeholder="Sender address"
            />

            <label className={`${labelStyle} mt-4`}>Sender Contact No</label>
            <input
              type="text"
              className={inputStyle}
              {...register("senderContact")}
              placeholder="Phone number"
            />

            <label className={`${labelStyle} mt-4`}>Pickup Instruction</label>
            <input
              type="text"
              className={inputStyle}
              {...register("pickupInstruction")}
              placeholder="Optional pickup instruction"
            />
          </div>

          {/* RECEIVER */}
          <div>
            <h2 className="text-xl font-bold mb-3 text-[#062C30]">
              Receiver Details
            </h2>

            <label className={labelStyle}>Receiver Name</label>
            <input
              type="text"
              className={inputStyle}
              {...register("receiverName")}
              placeholder="Receiver name"
            />

            {/* Receiver Email */}
            <label className={`${labelStyle} mt-4`}>Receiver Email</label>
            <input
              type="email"
              className={inputStyle}
              {...register("receiverEmail")}
              placeholder="Receiver email"
            />

            {/*  Receiver Region*/}
            <label className={`${labelStyle} mt-4`}>
              Receiver Pickup Warehouse
            </label>
            <select className={selectStyle} {...register("ReceiverRegion")}>
              <option>Select Wire house</option>

              {regions.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>
            {/*  Receiver Districts*/}
            <label className={`${labelStyle} mt-4`}>
              Receiver Pickup Warehouse
            </label>
            <select className={selectStyle} {...register("ReceiverDistricts")}>
              <option>Select Wire Districts</option>

              {districtsByRegion(ReceiverRegion).map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
            {/* addrece */}
            <label className={`${labelStyle} mt-4`}>Receiver Address</label>
            <input
              type="text"
              className={inputStyle}
              {...register("receiverAddress")}
              placeholder="Receiver address"
            />

            <label className={`${labelStyle} mt-4`}>Receiver Contact No</label>
            <input
              type="text"
              className={inputStyle}
              {...register("receiverContact")}
              placeholder="Phone number"
            />

            <label className={`${labelStyle} mt-4`}>Delivery Instruction</label>
            <input
              type="text"
              className={inputStyle}
              {...register("deliveryInstruction")}
              placeholder="Optional delivery instruction"
            />
          </div>
        </div>

        {/* PICKUP TIME */}
        <p className="text-sm text-gray-600 mt-8 mb-6">
          * PickUp Time 4pm–7pm Approx.
        </p>

        {/* BUTTON */}
        <button className="px-6 py-3 bg-[#9CD323] hover:bg-[#8AC21F] text-[#062C30] font-semibold rounded-md transition duration-300">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
