import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AssignRiders = () => {
  const axiosSecure = useAxiosSecure();
  const riderModalRef = useRef();
  const [selectedParcel, setSelectedParcel] = useState(null);

  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup"
      );
      return res.data;
    },
  });

  const { data: riders = [], refetch: parcelsRefetch } = useQuery({
    queryKey: ["riders", selectedParcel?.senderDistricts, "available"],

    enabled: !!selectedParcel,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/riders?status=approved&districts=${selectedParcel?.senderDistricts}&worksStatus=available`
      );
      return res.data;
    },
  });

  const openAssignRiderModel = (parcel) => {
    setSelectedParcel(parcel);

    riderModalRef.current.showModal();
  };

  const handleAssignRider = async (rider) => {
    const assignInfo = {
      riderId: rider._id,
      riderEmail: rider._id,
      riderName: rider.riderName,
      parcelId: selectedParcel._id,
      trackingId:selectedParcel.trackingId,
    };

    axiosSecure
      .patch(`/parcels/${selectedParcel._id}`, assignInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          riderModalRef.current.close();
          parcelsRefetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Rider has been assigned`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-4">
        Assign Riders ({parcels.length})
      </h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Parcel Name</th>
              <th>Cost</th>
              <th>Weight</th>
              <th>Create At</th>
              <th>Sender</th>
              <th>Pickup District</th>
              <th>Receiver</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost ? `$${parcel.cost}` : "-"}</td>
                <td>{parcel.parcelWeight} kg</td>
                <td>
                  {parcel.createdAt
                    ? new Date(parcel.createdAt).toLocaleDateString()
                    : "N/A"}
                </td>

                <td>
                  {parcel.senderName} <br />
                  {parcel.senderContact}
                </td>
                <td>{parcel.senderDistricts}</td>
                <td>
                  {parcel.receiverName} <br />
                  {parcel.receiverContact}
                </td>
                <td>
                  <button
                    onClick={() => openAssignRiderModel(parcel)}
                    className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Find Rider
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dialog
        ref={riderModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box max-w-3xl">
          <h3 className="font-bold text-lg mb-4">
            Available Riders ({riders.length})
          </h3>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>District</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {riders.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center text-red-500">
                      No rider found for this district
                    </td>
                  </tr>
                ) : (
                  riders.map((rider, index) => (
                    <tr key={rider._id}>
                      <th>{index + 1}</th>
                      <td>{rider.riderName}</td>
                      <td>{rider.riderEmail}</td>
                      <td>{rider.districts}</td>
                      <td>
                        <span className="badge badge-success">
                          {rider.worksStatus}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={() => handleAssignRider(rider)}
                        >
                          Assign
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRiders;
