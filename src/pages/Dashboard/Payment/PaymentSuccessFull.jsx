import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentSuccessFull = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [paymentInfo, setPaymentInfo] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        })
        .catch((err) => console.error(err));
    }
  }, [sessionId, axiosSecure]);

  return (
    <div className="p-6 flex justify-center items-center min-h-[60vh]">
      {!paymentInfo ? (
        <p className="text-xl font-semibold">Loading...</p>
      ) : (
        <div className="bg-white shadow-lg p-6 rounded-xl w-full max-w-md text-center border border-green-300">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Payment Successful 🎉
          </h2>

          <div className="space-y-2 text-lg font-semibold text-gray-700">
            <p>
              <span className="font-bold text-gray-900">Transaction ID:</span>
              <br /> {paymentInfo.transactionId}
            </p>

            <p>
              <span className="font-bold text-gray-900">Tracking ID:</span>
              <br /> {paymentInfo.trackingId}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccessFull;
