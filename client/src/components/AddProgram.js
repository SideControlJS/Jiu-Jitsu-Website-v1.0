import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProgram = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAddProgram = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Get token from local storage
      const response = await axios.post(
        'http://localhost:5000/api/program',
        { name, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate('/dashboard'); // Redirect after successful addition
    } catch (err) {
      setError('Error adding program.');
    }
  };

  return (
    <div>
      <h2>Add Program</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleAddProgram}>
        <input
          type="text"
          placeholder="Program Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Program</button>
      </form>
    </div>
  );
};

export default AddProgram;


