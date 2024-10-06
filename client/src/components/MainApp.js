import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Schedule from './Schedule.js';
import Facilities from './Facilities.js';
import Map from './Map.js';

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/map" element={<Map />} />
        <Route path="/*" element={<Schedule />} /> {/* Default to schedule */}
      </Routes>
    </Router>
  );
}

export default MainApp;



