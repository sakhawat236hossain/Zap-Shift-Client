import React from "react";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaBoxOpen, FaTruck } from "react-icons/fa";

const AssignDeliveries = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: parcels = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["parcels", user?.email, "driver_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `parcels/riders?riderEmail=${user.email}&deliveryStatus=driver_assigned`
      );
      return res.data;
    },
  });

  const handleDeliveryStatusUpdate = async (parcel, status) => {
    const statusInfo = {
      deliveryStatus: status,
      riderId: parcel.riderId,
      trackingId: parcel.trackingId,
    };
    let message = `parcel status is updated with ${status.split("_").join(" ")}`;
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 md:p-10">
      <div className="max-w-7xl mx-auto rounded-2xl shadow-2xl bg-white/90 backdrop-blur-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
          <h2 className="text-xl md:text-2xl font-bold tracking-wide">
            🚚 parcel pending pickup: {parcels.length}
          </h2>
          <p className="text-sm opacity-90">
            View and manage your assigned delivery requests
          </p>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <span className="loading loading-spinner loading-lg text-purple-500"></span>
          </div>
        )}

        {/* Empty */}
        {!isLoading && parcels.length === 0 && (
          <p className="text-center py-10 text-gray-500 font-medium">
            No deliveries available right now 📭
          </p>
        )}

        {/* Table */}
        {!isLoading && parcels.length > 0 && (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                <tr>
                  <th>#</th>
                  <th>Parcel</th>
                  <th>Weight</th>

                  <th>Pickup</th>
                  <th>Receiver</th>
                  <th>Destination</th>
                  <th>Confirm</th>
                  <th>Other Action</th>
                </tr>
              </thead>

              <tbody>
                {parcels.map((parcel, index) => (
                  <tr
                    key={parcel._id}
                    className="hover:bg-purple-50 transition-all"
                  >
                    <th className="font-bold text-purple-600">{index + 1}</th>

                    <td>
                      <p className="font-semibold text-indigo-600">
                        {parcel.parcelName}
                      </p>
                      <span className="badge badge-outline badge-primary badge-sm">
                        {parcel.parcelType}
                      </span>
                    </td>

                    <td>
                      <span className="badge badge-accent badge-sm flex items-center">
                        {parcel.parcelWeight} KG
                      </span>
                    </td>

                    <td>
                      <p className="font-medium">{parcel.senderDistricts}</p>
                      <small className="text-gray-500">
                        {parcel.senderAddress}
                      </small>
                    </td>

                    <td>
                      <p className="font-medium text-gray-700">
                        {parcel.receiverName}
                      </p>
                      <small className="text-gray-500">
                        {parcel.receiverContact}
                      </small>
                    </td>

                    <td>
                      <p className="font-medium">{parcel.ReceiverDistricts}</p>
                      <small className="text-gray-500">
                        {parcel.receiverAddress}
                      </small>
                    </td>

                    {/* Buttons should be inside <td> */}
                    <td className="flex gap-2">
                      {parcel.deliveryStatus === "driver_assigned" ? (
                        <>
                          <button
                            onClick={() =>
                              handleDeliveryStatusUpdate(
                                parcel,
                                "rider_arriving"
                              )
                            }
                            className="btn btn-xs md:btn-sm bg-green-500 hover:bg-green-600 border-none text-white"
                          >
                            ✅ Accept
                          </button>

                          <button className="btn btn-xs md:btn-sm bg-red-500 hover:bg-red-600 border-none text-white">
                            ❌ Reject
                          </button>

                          <button className="btn btn-xs md:btn-sm bg-yellow-400 hover:bg-yellow-500 border-none text-white">
                            ⚡ Just
                          </button>
                        </>
                      ) : (
                        <span className="text-green-600 font-semibold">
                          Accepted
                        </span>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          handleDeliveryStatusUpdate(parcel, "parcel_picked_up")
                        }
                        className="btn btn-xs md:btn-sm bg-blue-500 hover:bg-blue-600 border-none text-white mr-2"
                      >
                        {" "}
                        <FaTruck />
                      </button>
                      <button
                        onClick={() =>
                          handleDeliveryStatusUpdate(parcel, "parcel_delivered")
                        }
                        className="btn btn-xs md:btn-sm bg-purple-500 hover:bg-purple-600 border-none text-white"
                      >
                        <FaBoxOpen />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignDeliveries;
