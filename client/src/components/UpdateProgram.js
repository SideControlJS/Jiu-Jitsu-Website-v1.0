import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProgram = () => {
  const { id } = useParams(); // Get program ID from URL
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from local storage
        const response = await axios.get(`http://localhost:5000/api/program/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setName(response.data.name);
        setDescription(response.data.description);
      } catch (err) {
        setError('Error fetching program.');
      }
    };
    fetchProgram();
  }, [id]);

  const handleUpdateProgram = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:5000/api/program/${id}`,
        { name, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate('/dashboard'); // Redirect after successful update
    } catch (err) {
      setError('Error updating program.');
    }
  };

  return (
    <div>
      <h2>Update Program</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleUpdateProgram}>
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
        <button type="submit">Update Program</button>
      </form>
    </div>
  );
};

export default UpdateProgram;

