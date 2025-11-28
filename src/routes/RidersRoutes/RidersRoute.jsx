import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import UseRole from '../../Hooks/UseRole';
import Loading from '../../Components/Loading/Loading';
import ForbiddenPage from '../../Components/Forbidden/Forbidden';

const RidersRoute = ({children}) => {
    const { loading,user } = UseAuth();
  const { role, roleLoading } = UseRole();


  if (loading || !user|| roleLoading) {
    return <Loading />;
  }

  if (role !== 'rider') {
    return <ForbiddenPage />;
  }

  return <>{children}</>;
};

export default RidersRoute;