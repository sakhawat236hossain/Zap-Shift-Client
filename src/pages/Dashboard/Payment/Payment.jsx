import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: parcel = {} } = useQuery({
    queryKey: ['parcels', parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
    enabled: !!parcelId,
  });

  if (isLoading) {
    return (
      <h1 className="text-2xl font-bold text-center text-gray-700">Loading....</h1>
    );
  }


  const handlePayment = async ()=>{
const paymentInfo ={
    cost:parcel.cost,
    parcelId:parcel._id,
    senderEmail:parcel.senderEmail,
    parcelName: parcel.parcelName
}
const res = await axiosSecure.post("/create-checkout-session",paymentInfo);
// console.log(res.data);
window.location.href = res.data.url;


  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-md text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Please pay: {parcel.parcelName}
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Amount: <span className="font-semibold text-green-600">{parcel.cost} ৳</span>
      </p>

      <button onClick={handlePayment} className="btn btn-primary text-black px-6 py-2 rounded-md hover:bg-blue-600 transition">
        Pay Now
      </button>
    </div>
  );
};

export default Payment;


