import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
const {user,loading} = UseAuth();
const location = useLocation();


if(loading){
    return <div className='font-bold text-2xl text-center'>Loading...</div>
}
if(!user){
    return <Navigate state={location.pathname} to="/login"></Navigate>
}


    return children
};

export default PrivateRoute;