import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import UseRole from '../../Hooks/UseRole';
import Loading from '../../Components/Loading/Loading';
import ForbiddenPage from '../../Components/Forbidden/Forbidden';

const AdminRoute = ({ children }) => {
  const { loading } = UseAuth();
  const { role, roleLoading } = UseRole();


  if (loading || roleLoading) {
    return <Loading />;
  }

  if (role !== 'admin') {
    return <ForbiddenPage />;
  }

  return <>{children}</>;
};

export default AdminRoute;
