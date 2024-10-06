import React, { useState } from 'react';
import axios from 'axios';

const AddProgram = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');  // Clear any previous messages
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/program', {
        name,
        description
      });
      setSuccessMessage(`Program '${response.data.name}' added successfully!`);
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error adding program:', error);
      setErrorMessage('Failed to add program. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add New Program</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Program Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Program Description</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          ></textarea>
        </div>
        <button type="submit">Add Program</button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default AddProgram;

