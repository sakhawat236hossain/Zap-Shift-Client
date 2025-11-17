import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const RootLayout = () => {
    return (
        <div className='max-w-[1250px] mx-auto'>
             <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
           
        </div>
    );
};

export default RootLayout;