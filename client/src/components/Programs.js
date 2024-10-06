import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Programs = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/program');
        setPrograms(response.data);
      } catch (error) {
        console.error('Error fetching programs:', error);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <div>
      <h2>Programs Offered</h2>
      {programs.length > 0 ? (
        <ul>
          {programs.map((program) => (
            <li key={program._id}>
              <h3>{program.name}</h3>
              <p>{program.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No programs available.</p>
      )}
    </div>
  );
};

export default Programs;
