import React from "react";
import { useForm } from "react-hook-form";
 import UseAuth from "../../../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = UseAuth();
const location = useLocation();
const navigate = useNavigate();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(location?.state || '/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center px-4 mt-10 mb-10">
      <div className="card w-full max-w-sm bg-base-100 shadow-2xl rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          {errors.email?.type === "required" && (
            <span className="text-red-600 text-sm">This field is required</span>
          )}

          {/* Password */}
          <div>
            <label className="label font-semibold">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="input input-bordered w-full rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          {errors.password?.type === "required" && (
            <span className="text-red-600 text-sm">This field is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-red-600 text-sm">
              Password must be at least 6 characters
            </span>
          )}

          {/* Forgot Password */}
          <div className="flex">
            <a className="link link-hover text-sm">Forgot password?</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-2 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            Login
          </button>
        </form>

        <SocialLogin></SocialLogin>
        {/* Register Link */}
        <div className="text-center mt-4 text-sm">
          Don't have an account?
          <Link to="/register" className="link link-primary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
