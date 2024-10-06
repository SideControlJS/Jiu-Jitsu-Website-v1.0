import React from 'react';
import ReactDOM from 'react-dom/client'; // Change from 'react-dom'
import MainApp from './components/MainApp.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

