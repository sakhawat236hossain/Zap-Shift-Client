import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:8000",
});

const useAxiosSecure = () => {
  const { user, logOutUser } = UseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
      // ❌ No extra spaces
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    });

    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        console.log("AXIOS ERROR => ", error.response?.status);

        // ✅ Correct status
        const statusCode = error.response?.status;

        if (statusCode === 401 || statusCode === 403) {
          logOutUser().then(() => {
            navigate("/login");
          });
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user]);

  return axiosSecure;
};

export default useAxiosSecure;
