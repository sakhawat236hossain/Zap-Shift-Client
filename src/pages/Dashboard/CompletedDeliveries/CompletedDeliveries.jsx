import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const CompletedDeliveries = () => {
      const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: parcels = []} = useQuery({
    queryKey: ["parcels", user?.email, "driver_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `parcels/riders?riderEmail=${user.email}&deliveryStatus="parcel_delivered"`
      );
      return res.data;
    },
  });



  const calculatePayout=(parcel)=>{
    if(parcel.senderDistricts===parcel.ReceiverDistricts){
        return parcel.cost*0.8
    }
    else{
        return parcel.cost*0.6
    }
  }

    return (
        <div>
            <h1 className="text-2xl">completed Deliveries: {parcels.length}</h1>
            
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Parcel Name</th>
              <th>Create At</th>
              <th>Sender</th>
              <th>Pickup District</th>
              <th>Payout</th>
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
             
                <td>
                  {parcel.createdAt
                    ? new Date(parcel.createdAt).toLocaleDateString()
                    : "N/A"}
                </td>

               
                <td>{parcel.senderDistricts}</td>
                <td>{calculatePayout(parcel)}</td>
                <td>
                  {parcel.receiverName} <br />
                  {parcel.receiverContact}
                </td>
                <td>
                  <button
              
                    className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Cash Out
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

export default CompletedDeliveries;