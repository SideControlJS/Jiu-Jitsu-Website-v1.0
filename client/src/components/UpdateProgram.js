import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProgram = () => {
  const { id } = useParams(); // Get the program ID from the URL
  const navigate = useNavigate(); // To navigate after update
  const [programData, setProgramData] = useState({
    name: '',
    description: ''
  });

  useEffect(() => {
    // Fetch the current program details to populate the form
    const fetchProgram = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/program/${id}`);
        setProgramData(response.data);
      } catch (error) {
        console.error('Error fetching program:', error);
      }
    };

    fetchProgram();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProgramData({
      ...programData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/program/${id}`, programData);
      alert('Program updated successfully!');
      navigate('/programs'); // Redirect to the program list or another page
    } catch (error) {
      console.error('Error updating program:', error);
    }
  };

  return (
    <div>
      <h2>Update Program</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={programData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={programData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Update Program</button>
      </form>
    </div>
  );
};

export default UpdateProgram;
