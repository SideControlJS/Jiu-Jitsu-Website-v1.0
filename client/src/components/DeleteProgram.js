import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteProgram = () => {
  const { id } = useParams(); // Get program ID from URL
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const deleteProgram = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from local storage
        await axios.delete(`http://localhost:5000/api/program/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        navigate('/dashboard'); // Redirect after successful deletion
      } catch (err) {
        setError('Error deleting program.');
      }
    };
    deleteProgram();
  }, [id, navigate]);

  return (
    <div>
      <h2>Deleting Program...</h2>
      {error && <p>{error}</p>}
    </div>
  );
};

export default DeleteProgram;
