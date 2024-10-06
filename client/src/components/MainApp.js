import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Schedule from './Schedule';
import Facilities from './Facilities';
import Map from './Map';
import AddProgram from './AddProgram';
import UpdateProgram from './UpdateProgram';
import Login from './Login';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/map" element={<Map />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/add-program"
          element={
            <ProtectedRoute>
              <AddProgram />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-program/:id"
          element={
            <ProtectedRoute>
              <UpdateProgram />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />

        {/* Default route */}
        <Route path="/*" element={<Schedule />} />
      </Routes>
    </Router>
  );
}

export default MainApp;




