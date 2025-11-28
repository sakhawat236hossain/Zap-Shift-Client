import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUserCheck, FaTrashCan } from "react-icons/fa6";
import { IoPersonRemoveSharp } from "react-icons/io5";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();

  const { data: riders = [], refetch } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const updateRidesStatus = (rider, status) => {
    const updateInfo = {status:status,email:rider.riderEmail}

    axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
           refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Rider status updated to ${status}!`,
            showConfirmButton: false,
            timer: 2000,
          });

         
        }
      })
      .catch((err) => console.log(err));
  };

  const handleApproval = (rider) => {
    updateRidesStatus(rider, "approved");
  };

  const handleRejection = (rider) => {
    updateRidesStatus(rider, "rejected");
  };

  return (
    <div className="p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 border">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          🚴 Riders Pending Approval
          <span className="text-blue-600"> ({riders.length})</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="table w-full rounded-xl overflow-hidden">
            <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>District</th>
                <th>Work status</th>
                <th>Application Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {riders.map((rider, index) => (
                <tr key={rider._id} className="hover:bg-gray-50 transition">
                  <td>{index + 1}</td>
                  <td>{rider.riderName}</td>
                  <td>{rider.riderEmail}</td>
                  <td>{rider.districts}</td>
                  <td>{rider.worksStatus}</td>
                  <td>
                    <span
                      className={
                        rider.status === "approved"
                          ? "badge badge-success"
                          : rider.status === "rejected"
                            ? "badge badge-error"
                            : "badge badge-warning"
                      }
                    >
                      {rider.status}
                    </span>
                  </td>

                  <td>
                    <div className="flex gap-2 justify-center">
                      {/* Approve */}
                      <button
                        onClick={() => handleApproval(rider)}
                        className="btn btn-sm bg-green-600 text-white hover:bg-green-700 rounded-md"
                      >
                        <FaUserCheck size={16} />
                      </button>

                      {/* Reject */}
                      <button
                        onClick={() => handleRejection(rider)}
                        className="btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600 rounded-md"
                      >
                        <IoPersonRemoveSharp size={16} />
                      </button>

                      {/* Remove
                      <button className="btn btn-sm bg-red-600 text-white hover:bg-red-700 rounded-md">
                        <FaTrashCan size={16} />
                      </button> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApproveRiders;
