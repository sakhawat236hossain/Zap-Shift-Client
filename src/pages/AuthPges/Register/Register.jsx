import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../Hooks/UseAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser,updateUserProfile } = UseAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegistRation = (data) => {
        console.log(data);
        const profileImage = data.photo[0];
        createUser(data.email, data.password)
            .then(result => {
                console.log("User created:", result.user,data.name);
                const formData = new FormData();
                formData.append('image', profileImage);
                const image_URL_API=`https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_IMGE_HOSTING_key}`;
                axios.post(image_URL_API, formData)
                .then(Res => {
                    const imageURL = Res.data.data.display_url;
                    console.log("Image uploaded:", imageURL);

                    // update user profile 
                    const updatedUserProfile ={
                        displayName: data.name,
                        photoURL: imageURL
                    };
                    updateUserProfile(updatedUserProfile)
                    .then(() => {
                        console.log("User profile updated");
                        navigate(location?.state || '/');
                    })
                    .catch(profileError => {
                        console.log("Profile update error:", profileError.message);
                    });
                     
                })
                .catch(imageError => {
                    console.log("Image upload error:", imageError.message);
                });
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

                        {/* Name*/}
                        <div>
                            <label className="block text-gray-700 font-semibold">Name</label>
                            <input
                                type="name"
                                {...register('name', { required: true })}
                                className="w-full input input-bordered"
                                placeholder="your name"
                            />
                            {errors.name && (
                                <span className='text-red-600 text-sm'>name is required</span>
                            )}
                        </div>
                        {/* photo image*/}
                        <div>
                            <label className="block text-gray-700 font-semibold">Photo</label>
                            <input
                                type="file"
                                {...register('photo', { required: true })}
                                className="w-full file-input "
                                placeholder="your photo"
                            />
                            {errors.photo && (
                                <span className='text-red-600 text-sm'>photo is required</span>
                            )}
                        </div>
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
                    <Link
                     to="/login" 
                     className="link link-primary"
                     state={location.state}
                     >
                        Login
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default Register;
