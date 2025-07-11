// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  if (!userInfo || !userInfo.token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
