import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authIMG from "../assets/authImage.png";

const AuthLayout = () => {
    return (
        <div className="max-w-[1480px] mx-auto px-4">
            <Logo />

            {/* Main Layout */}
            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-5">

                {/* Left Side (Form Section) */}
                <div className="w-full lg:w-1/2">
                    <Outlet />
                </div>

                {/* Right Side (Image Section) */}
                <div className="w-full lg:w-1/2 flex justify-center ">
                    <img 
                        src={authIMG} 
                        alt="auth" 
                        className=" lg:max-w-full object-contain "
                    />
                </div>

            </div>
        </div>
    );
};

export default AuthLayout;
