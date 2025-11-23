import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    }
  });

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Payment History</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Transaction ID</th>
              <th>Status</th>
              <th>Paid At</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.amount}</td>
                <td>{payment.currency}</td>
                <td>{payment.transactionId}</td>
                <td className="font-medium text-green-600">{payment.paymentStatus}</td>
                <td>{new Date(payment.paidAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default PaymentHistory;
