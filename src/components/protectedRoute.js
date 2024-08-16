import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import SuperAdmin from './pages/SuperAdmin';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return isAuthenticated ? <Element {...rest} /> : <SuperAdmin />;
};

export default ProtectedRoute;
