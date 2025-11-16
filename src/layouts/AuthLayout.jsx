import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authIMG from "../assets/authImage.png";

const AuthLayout = () => {
    return (
        <div className='max-w-[1480px] mx-auto'>
            <Logo></Logo>
            <div className='flex justify-between items-center mt-10'>
                <div className='flex-1 '>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={authIMG} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;