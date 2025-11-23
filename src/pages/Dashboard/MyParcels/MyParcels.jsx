import React from "react";
import UseAuth from "../../../Hooks/UseAuth";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/Parcels?email=${user.email}`);
      return res.data;
    },
  });
  // delete
  const handleParcelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/parcels/${id}`)
          .then((res) => {
            console.log(res.data);

            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your parcel has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            console.log(err);
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };


  // handle  payment
  const handlePayment =async (parcel )=>{
const paymentInfo ={
    cost:parcel.cost,
    parcelId:parcel._id,
    senderEmail:parcel.senderEmail,
    parcelName: parcel.parcelName
}
const res = await axiosSecure.post("/payment-checkout-session",paymentInfo);

// console.log(res.data.url);
window.location.href = res.data.url;
  }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">
        All of my parcels: {parcels.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Parcel Name</th>

              <th>Sender</th>

              <th>Cost</th>
              <th>Created At</th>
              <th>payment</th>
              <th>Delivery Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>

                {/* Parcel Name */}
                <td>{parcel.parcelName}</td>

                {/* Sender */}
                <td>{parcel.senderName}</td>

                {/* Cost */}
                <td>{parcel.cost} ৳</td>

                {/* Created At */}
                <td>{new Date(parcel.createdAt).toLocaleDateString()}</td>
                {/* pay */}
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="badge badge-success gap-2 px-3 py-2">
                      Paid
                    </span>
                  ) : (
                    <button onClick={()=>handlePayment(parcel)} className="btn btn-xs btn-primary text-black">
                      Pay
                    </button>
                  )}
                </td>

                {/* delivery */}
                <td>{parcel.deliveryStatus}</td>

                {/* Actions */}
                <td className="flex items-center gap-2">
                  <button className="btn btn-xs bg-blue-500 text-white hover:bg-blue-600 rounded-lg flex items-center gap-1">
                    <i className="fa-solid fa-eye"></i> View
                  </button>

                  <button className="btn btn-xs bg-yellow-500 text-black hover:bg-yellow-600 rounded-lg flex items-center gap-1">
                    <i className="fa-solid fa-pen-to-square"></i> Edit
                  </button>

                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="btn btn-xs bg-red-500 text-white hover:bg-red-600 rounded-lg flex items-center gap-1"
                  >
                    <i className="fa-solid fa-trash"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
