import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Programs } from './pages/Programs';
import { Schedule } from './pages/Schedule';
import { Contact } from './pages/Contact';
import { Facilities } from './pages/Facilities';
import { About } from './pages/About';
import { Instructors } from './pages/Instructors';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/about" element={<About />} />
            <Route path="/instructors" element={<Instructors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;