import React from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

const ParcelTrack = () => {
  const { trackingId } = useParams();
  const axiosInstance = useAxios();

  const { data: trackings = [], isLoading } = useQuery({
    queryKey: ["trackings", trackingId],
    enabled: !!trackingId,
    queryFn: async () => {
      const res = await axiosInstance.get(`/trackings/${trackingId}/logs`);
      return res.data;
    },
  });

  return (
    <div className="p-4 md:p-10 min-h-screen bg-gray-100">
      <h2 className="text-2xl md:text-3xl text-green-600 font-bold mb-2">
        Track your Package: <span className="text-indigo-600">{trackingId}</span>
      </h2>

      <h3 className="text-xl text-gray-700 mb-4">
        Logs so far: {trackings.length}
      </h3>

      {isLoading && (
        <p className="text-center text-gray-500">Loading tracking data...</p>
      )}

      {!isLoading && trackings.length === 0 && (
        <p className="text-center text-gray-500">No logs available for this parcel.</p>
      )}

      {!isLoading && trackings.length > 0 && (
        <ul className="timeline timeline-vertical">
          {trackings.map((log, index) => (
            <li key={index} className="mb-4">
              <div className="timeline-start capitalize font-medium text-gray-800">
                {log.status.replace(/-/g, ' ')}
              </div>

              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="timeline-end timeline-box text-gray-600">
                {log.details}
              </div>
              <hr className="my-2" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ParcelTrack;
