import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import ProtectedRoute from './component/ProtectedRoute';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = (username: string, password: string) => {
    if (username === "user" && password === "pass") {
      setIsAuthenticated(true);
      return true;
    } else {
      setIsAuthenticated(false);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        {isAuthenticated && <button onClick={logout}>Logout</button>}
        <Routes>
          <Route
            path="/"
            element={<Navigate to={isAuthenticated ? "/home" : "/login"} />}
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                authenticationPath="/login"
                element={<Home />}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                authenticationPath="/login"
                element={<Dashboard />}
              />
            }
          />
          <Route path="/login" element={<Login login={login} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
