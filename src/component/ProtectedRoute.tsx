import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  authenticationPath,
  element,
}) => {
  if (isAuthenticated) {
    return element; 
  } else {
    return <Navigate to={authenticationPath} />;
  }
};

export default ProtectedRoute;
