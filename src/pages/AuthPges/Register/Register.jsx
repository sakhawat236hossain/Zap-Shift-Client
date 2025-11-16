import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegistRation = (data) => {
        console.log(data);
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <form 
                onSubmit={handleSubmit(handleRegistRation)} 
                className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md"
            >
                <h2 className="text-3xl font-bold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 mb-6 drop-shadow-lg">
                    Register
                </h2>

                <fieldset className="space-y-4">
                    <label className="block text-gray-700 font-semibold">Email</label>
                    <input
                        type="email"
                        {...register('email', { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm"
                        placeholder="Enter your email"
                    />
                    {errors.email?.type === "required" && (
                        <span className='text-red-600 text-sm'>Email is required</span>
                    )}

                    <label className="block text-gray-700 font-semibold">Password</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/
                        })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent shadow-sm"
                        placeholder="Enter your password"
                    />
                    {errors.password?.type === "required" && (
                        <span className='text-red-600 text-sm'>Password is required</span>
                    )}
                    {errors.password?.type === "minLength" && (
                        <span className='text-red-600 text-sm'>Password must be 6 characters or longer</span>
                    )}
                    {errors.password?.type === "pattern" && (
                        <span className='text-red-600 text-sm'>
                            Password must contain at least one uppercase letter, one lowercase letter, and one number
                        </span>
                    )}

                    <div className="text-right">
                        <a className="text-blue-500 hover:underline text-sm">Forgot password?</a>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full mt-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                    >
                        Register
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;
