import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Gracie Jiu-Jitsu Gym</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/programs" className="hover:text-blue-300">Programs</Link></li>
            <li><Link to="/schedule" className="hover:text-blue-300">Schedule</Link></li>
            <li><Link to="/facilities" className="hover:text-blue-300">Facilities</Link></li>
            <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
            <li><Link to="/instructors" className="hover:text-blue-300">Instructors</Link></li>
            <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};