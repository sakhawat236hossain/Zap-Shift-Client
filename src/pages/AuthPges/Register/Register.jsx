import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../Hooks/UseAuth';
import { Link } from 'react-router-dom';

import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = UseAuth();

    const handleRegistRation = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                console.log("User created:", result.user);
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    return (
        <div className="flex flex-col items-center justify-center p-4 min-h-screen">

            <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">

                <form onSubmit={handleSubmit(handleRegistRation)}>
                    <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                        Create an Account
                    </h2>

                    <fieldset className="space-y-4">

                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-semibold">Email</label>
                            <input
                                type="email"
                                {...register('email', { required: true })}
                                className="w-full input input-bordered"
                                placeholder="Enter your email"
                            />
                            {errors.email && (
                                <span className='text-red-600 text-sm'>Email is required</span>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-700 font-semibold">Password</label>
                            <input
                                type="password"
                                {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/
                                })}
                                className="w-full input input-bordered"
                                placeholder="Enter a strong password"
                            />
                            {errors.password?.type === "required" && (
                                <span className='text-red-600 text-sm'>Password is required</span>
                            )}
                            {errors.password?.type === "minLength" && (
                                <span className='text-red-600 text-sm'>Minimum 6 characters required</span>
                            )}
                            {errors.password?.type === "pattern" && (
                                <span className='text-red-600 text-sm'>
                                    Must include uppercase, lowercase & number
                                </span>
                            )}
                        </div>

                        {/* Forgot Password */}
                        <div className="text-start">
                            <a className="link link-hover text-sm">Forgot password?</a>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-neutral w-full">
                            Register
                        </button>

                    </fieldset>
                </form>
   


   <SocialLogin></SocialLogin>
                {/* Login Link (Button-er Niche) */}
                <div className="text-center mt-4 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="link link-primary">
                        Login
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default Register;
