// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/add-program">Add Program</Link>
        </li>
        <li>
          <Link to="/update-program">Update Program</Link>
        </li>
        <li>
          <Link to="/delete-program">Delete Program</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
