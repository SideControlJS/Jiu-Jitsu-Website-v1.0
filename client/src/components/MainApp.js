import React, { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'programs':
        return <Programs />;
      case 'schedule':
        return <Schedule />;
      case 'contact':
        return <Contact />;
      case 'facilities':
        return <Facilities />;
      case 'about':
        return <About />;
      case 'instructors':
        return <Instructors />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gracie Jiu-Jitsu Gym</h1>
          <nav>
            <ul className="flex space-x-4">
              {['home', 'programs', 'schedule', 'facilities', 'about', 'instructors', 'contact'].map((page) => (
                <li key={page}>
                  <button 
                    onClick={() => setCurrentPage(page)} 
                    className="hover:text-blue-300 capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {renderPage()}
      </main>
      <footer className="bg-blue-900 text-white p-4">
        <div className="container mx-auto text-center">
          &copy; 2024 Gracie Jiu-Jitsu Gym. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

const Home = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Welcome to Gracie Jiu-Jitsu Gym</h2>
    <p>Experience the art of Gracie Jiu-Jitsu in a welcoming and professional environment.</p>
  </div>
);

const Programs = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Our Programs</h2>
    <ul className="list-disc pl-5">
      <li>Beginner Classes</li>
      <li>Advanced Training</li>
      <li>Kids Program</li>
      <li>Self-Defense Workshops</li>
    </ul>
  </div>
);

const Schedule = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Class Schedule</h2>
    <p>Our schedule updates monthly. Please check back for the latest class times.</p>
  </div>
);

const Contact = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <p>Phone: (555) 123-4567</p>
    <p>Email: info@graciejiujitsugym.com</p>
    <p>Address: 123 Main St, Anytown, USA</p>
  </div>
);

const Facilities = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Our Facilities</h2>
    <p>State-of-the-art training mats, locker rooms, and a pro shop.</p>
  </div>
);

const About = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">About Us</h2>
    <p>Learn about our history, philosophy, and commitment to Gracie Jiu-Jitsu.</p>
  </div>
);

const Instructors = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Our Instructors</h2>
    <p>Meet our team of certified Gracie Jiu-Jitsu instructors.</p>
  </div>
);

export default App;