import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProgram = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  const handleAddProgram = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); 
      if (!token) {
        setError('No token found.');
        return;
      }
      console.log('Token:', token); // Check if the token exists
  
      const response = await axios.post(
        'http://localhost:5000/api/program',
        { name, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Program added:', response.data); 
      navigate('/dashboard'); 
    } catch (err) {
      console.log('Error:', err.response ? err.response.data : err.message);
      setError('Error adding program.');
    }
  };

  return (
    <div>
      <h2>Add Program</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleAddProgram}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Program Name"
          />
        </div>
        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Program Description"
          />
        </div>
        <button type="submit">Add Program</button>
      </form>
    </div>
  );
};

export default AddProgram;



