import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component: React.ComponentType) => {
  return (props: any) => {
    const isAuthenticated = localStorage.getItem('authToken') !== null;

    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  };
};

export default withAuth;
