import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Schedule from './Schedule.js';
import Facilities from './Facilities.js';
import Programs from './Programs.js'; // Import Programs component
import AddProgram from './AddProgram.js'; // Import AddProgram component
import UpdateProgram from './UpdateProgram.js';
import Map from './Map.js';

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/programs/update/:id" element={<UpdateProgram />} /> {/* Added route for UpdateProgram */}
        <Route path="/add-program" element={<AddProgram />} /> {/* Added route for AddProgram */}
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/programs" element={<Programs />} /> {/* Added route for Programs */}
        <Route path="/map" element={<Map />} />
        <Route path="/*" element={<Schedule />} /> {/* Default to schedule */}
      </Routes>
    </Router>
  );
}

export default MainApp;



