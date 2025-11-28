import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa6";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const[searchText,setSearchText]=useState()

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users",searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchText=${searchText}`);
      return res.data;
    },
  });

const handleMakeAdmin = (user) => {
  Swal.fire({
    title: `Are you sure?`,
    text: `You want to make ${user.displayName} an Admin!`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, make admin",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      const roleInfo = { role: "admin" };
      axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.displayName} user Marked as an Admin`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    }
  });
};

const handleRemoveAdmin = (user) => {
  Swal.fire({
    title: `Are you sure?`,
    text: `You want to remove ${user.displayName} from Admin!`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, remove admin",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      const roleInfo = { role: "user" };
      axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.displayName} removed from Admin`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    }
  });
};


  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Users Management <span className="text-primary">({users.length})</span>
      </h2>
      {/* input */}
<div className="flex justify-center items-center mb-10">
  <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input 
   type="search"
   onChange={(e)=>setSearchText(e.target.value)}
    required placeholder="Search users"
     />
</label>
</div>
      <div className="overflow-x-auto bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 rounded-2xl p-6">
        <table className="table w-full">
          <thead>
            <tr className="text-gray-700 bg-gray-100 font-semibold">
              <th className="rounded-l-lg">#</th>
              <th>User Info</th>
              <th>Email</th>
              <th className="text-center">Action</th>
              <th className="text-center">Other Action</th>
              <th className="rounded-r-lg">Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-gray-50 transition-all duration-300"
              >
                <td className="font-medium text-gray-600">{index + 1}</td>

                {/* USER INFO */}
                <td>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12 ring ring-primary ring-offset-2 shadow-md">
                        <img src={user.photoURL} alt={user.displayName} />
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        {user.displayName}
                      </p>
                      <p className="text-xs text-gray-500 italic">
                        Joined: {user.createdAt?.slice(0, 10)}
                      </p>
                    </div>
                  </div>
                </td>

                {/* EMAIL */}
                <td className="text-gray-700">{user.email}</td>

                {/* ACTIONS */}
                <td className="flex gap-2 justify-center">
                  {/* Shield button */}
                  {user.role === "admin" ? (
                    <button
                      className="p-2 bg-red-100 text-red-600 rounded-lg cursor-pointer opacity-50 shadow-sm"
                      onClick={() => handleRemoveAdmin(user)}
                    >
                      <FiShieldOff size={18} />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="p-2 bg-green-100 text-green-700 cursor-pointer rounded-lg hover:bg-green-200 transition shadow-sm"
                    >
                      <FaUserShield size={18} />
                    </button>
                  )}
                </td>

                <td className="text-gray-700">Other Action</td>

                {/* ROLE */}
                <td>
                  <span
                    className={`badge px-4 py-3 rounded-lg shadow-sm text-white border-0 ${
                      user.role === "admin" ? "bg-red-500" : "bg-primary"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
