import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Get the token from localStorage
  
  if (!token) {
    return <Navigate to="/login" />; // Redirect to login page if no token
  }

  return children; // If token exists, render the child components
};

export default ProtectedRoute;
